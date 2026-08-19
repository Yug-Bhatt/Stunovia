import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import GradualBlur from "./GradualBlur";
import "./AnimatedList.css";

const AnimatedItem = ({ children, delay = 0, index, onMouseEnter, onClick }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, triggerOnce: false });
  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ scale: 0.85, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.85, opacity: 0 }}
      transition={{ duration: 0.2, delay }}
      style={{ marginBottom: "0.25rem", cursor: "pointer" }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedList = ({
  items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
  ],
  onItemSelect,
  showGradients = true,
  enableArrowNavigation = true,
  className = "",
  itemClassName = "",
  displayScrollbar = true,
  initialSelectedIndex = -1,
  variant = "default",
}) => {
  const listRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
  const [keyboardNav, setKeyboardNav] = useState(false);
  const [topGradientOpacity, setTopGradientOpacity] = useState(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState(1);

  // Sync selected index when initialSelectedIndex changes (e.g. on route change)
  useEffect(() => {
    if (initialSelectedIndex !== undefined && initialSelectedIndex >= 0) {
      setSelectedIndex(initialSelectedIndex);
    }
  }, [initialSelectedIndex]);

  const handleItemMouseEnter = useCallback((index) => {
    setSelectedIndex(index);
  }, []);

  const handleItemClick = useCallback(
    (item, index) => {
      setSelectedIndex(index);
      if (onItemSelect) {
        onItemSelect(item, index);
      }
    },
    [onItemSelect]
  );

  const handleScroll = useCallback((e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    setTopGradientOpacity(Math.min(scrollTop / 40, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(
      scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 40, 1)
    );
  }, []);

  useEffect(() => {
    if (!enableArrowNavigation) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown" || (e.key === "Tab" && !e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.min(prev + 1, items.length - 1));
      } else if (e.key === "ArrowUp" || (e.key === "Tab" && e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter") {
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          e.preventDefault();
          if (onItemSelect) {
            onItemSelect(items[selectedIndex], selectedIndex);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

  useEffect(() => {
    if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
    const container = listRef.current;
    const selectedItem = container.querySelector(
      `[data-index="${selectedIndex}"]`
    );
    if (selectedItem) {
      const extraMargin = 40;
      const containerScrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const itemTop = selectedItem.offsetTop;
      const itemBottom = itemTop + selectedItem.offsetHeight;
      if (itemTop < containerScrollTop + extraMargin) {
        container.scrollTo({ top: itemTop - extraMargin, behavior: "smooth" });
      } else if (
        itemBottom >
        containerScrollTop + containerHeight - extraMargin
      ) {
        container.scrollTo({
          top: itemBottom - containerHeight + extraMargin,
          behavior: "smooth",
        });
      }
    }
    setKeyboardNav(false);
  }, [selectedIndex, keyboardNav]);

  const renderItemContent = (item, isSelected) => {
    if (typeof item === "string") {
      return <p className="item-text">{item}</p>;
    }
    if (typeof item === "object" && item !== null) {
      const Icon = item.icon;
      return (
        <div className="flex w-full items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            {Icon && (
              <Icon
                size={18}
                className={`item-icon shrink-0 transition-colors ${
                  isSelected
                    ? "text-white"
                    : "text-[#5F6B70] group-hover:text-[#17232A]"
                }`}
              />
            )}
            <span
              className={`item-text truncate text-sm font-medium transition-colors ${
                isSelected ? "text-white font-semibold" : "text-[#5F6B70]"
              }`}
            >
              {item.title || item.name}
            </span>
          </div>
          {item.badge && (
            <span
              className={`item-badge shrink-0 rounded-lg px-2 py-0.5 text-[10px] font-semibold transition-colors ${
                isSelected
                  ? "bg-white/20 text-white"
                  : "bg-[#299F95]/15 text-[#299F95]"
              }`}
            >
              {item.badge}
            </span>
          )}
        </div>
      );
    }
    return <p className="item-text">{String(item)}</p>;
  };

  return (
    <div className={`scroll-list-container ${variant === "sidebar" ? "sidebar-list" : ""} ${className}`}>
      <div
        ref={listRef}
        className={`scroll-list ${!displayScrollbar ? "no-scrollbar" : ""}`}
        onScroll={handleScroll}
      >
        {items.map((item, index) => {
          const isSelected = selectedIndex === index;
          return (
            <AnimatedItem
              key={item.path || item.id || index}
              delay={0.03 * (index % 8)}
              index={index}
              onMouseEnter={() => handleItemMouseEnter(index)}
              onClick={() => handleItemClick(item, index)}
            >
              <div
                className={`item group ${
                  isSelected ? "selected" : ""
                } ${itemClassName}`}
              >
                {renderItemContent(item, isSelected)}
              </div>
            </AnimatedItem>
          );
        })}
      </div>
      {showGradients && (
        <>
          <GradualBlur
            position="top"
            height="1.75rem"
            strength={1.5}
            divCount={4}
            opacity={topGradientOpacity}
            color="#FAF6EE"
          />
          <GradualBlur
            position="bottom"
            height="1.75rem"
            strength={1.5}
            divCount={4}
            opacity={bottomGradientOpacity}
            color="#FAF6EE"
          />
        </>
      )}
    </div>
  );
};

export default AnimatedList;
