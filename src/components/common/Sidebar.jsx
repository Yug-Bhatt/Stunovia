import {
  LayoutDashboard,
  Newspaper,
  Briefcase,
  Trophy,
  FileText,
  Code2,
  BookOpen,
  Bookmark,
  Bot,
  Sparkles,
  Settings,
  X,
  PanelLeftClose,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import AnimatedList from "./AnimatedList";
import GradualBlur from "./GradualBlur";

const menu = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    path: "/",
  },
  {
    icon: Newspaper,
    title: "My Feed",
    path: "/feed",
  },
  {
    icon: Briefcase,
    title: "Internships",
    path: "/internships",
    badge: "Live",
  },
  {
    icon: Trophy,
    title: "Hackathons",
    path: "/hackathons",
  },
  {
    icon: FileText,
    title: "Research Papers",
    path: "/research-papers",
  },
  {
    icon: Code2,
    title: "GitHub",
    path: "/github",
  },
  {
    icon: BookOpen,
    title: "Courses",
    path: "/courses",
  },
  {
    icon: Bookmark,
    title: "Bookmarks",
    path: "/bookmarks",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    path: "/ai-assistant",
  },
];

export default function Sidebar({
  mobileOpen = false,
  setMobileOpen = () => {},
  sidebarOpen = true,
  onToggleSidebar = () => {},
}) {
  const location = useLocation();
  const navigate = useNavigate();

  // Find active index based on route
  const currentIdx = menu.findIndex((item) =>
    item.path === "/" ? location.pathname === "/" : location.pathname.startsWith(item.path)
  );
  const activeIndex = currentIdx >= 0 ? currentIdx : 0;

  const handleSelectNav = (item) => {
    if (item?.path) {
      navigate(item.path);
    }
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const sidebarContent = (
    <div className="flex h-full flex-col justify-between">
      {/* Top Brand & Hide/Collapse Action */}
      <div>
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#299F95] text-white shadow-xs">
              <Sparkles size={16} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-[#17232A]">
                STUNOVIA
              </h1>
              <p className="text-[11px] font-medium text-[#5F6B70]">
                Student Intelligence
              </p>
            </div>
          </div>

          {/* Desktop Hide Sidebar Toggle */}
          <button
            onClick={onToggleSidebar}
            className="hidden lg:flex rounded-lg p-1.5 text-[#5F6B70] transition hover:bg-[#E8DFD1]/50 hover:text-[#17232A] cursor-pointer"
            title="Hide Sidebar (Shortcut: ⌘S)"
            aria-label="Hide sidebar"
          >
            <PanelLeftClose size={18} />
          </button>

          {/* Close button on mobile */}
          {mobileOpen && (
            <button
              onClick={() => setMobileOpen(false)}
              className="rounded-lg p-1.5 text-[#5F6B70] transition hover:bg-[#E8DFD1]/50 hover:text-[#17232A] lg:hidden cursor-pointer"
              aria-label="Close navigation"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Animated Navigation Items (React Bits Component) */}
        <div className="relative px-2 pt-2">
          <AnimatedList
            items={menu}
            onItemSelect={handleSelectNav}
            initialSelectedIndex={activeIndex}
            variant="sidebar"
            showGradients={false}
            enableArrowNavigation={true}
            displayScrollbar={false}
            className="w-full"
          />
          <GradualBlur
            position="bottom"
            height="2.5rem"
            strength={1.5}
            divCount={4}
            color="#FAF6EE"
          />
        </div>
      </div>

      {/* Bottom Profile & Settings */}
      <div className="shrink-0 border-t border-[#E8DFD1]/80 bg-[#FAF6EE]/80 p-4">
        <div className="flex items-center justify-between rounded-lg glass-pill p-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#299F95]/10 text-[#299F95] font-bold text-xs">
              YB
            </div>
            <div className="min-w-0">
              <h3 className="truncate text-sm font-semibold text-[#17232A]">
                Yug Bhatt
              </h3>
              <p className="truncate text-xs text-[#5F6B70]">
                AI / ML Track
              </p>
            </div>
          </div>
          <button
            className="rounded-lg p-1.5 text-[#5F6B70] transition hover:bg-[#FAF6EE] hover:text-[#17232A] cursor-pointer"
            title="Profile & Settings"
            aria-label="Settings"
          >
            <Settings size={16} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar with collapsible visibility */}
      {sidebarOpen && (
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-[#E8DFD1] bg-[#FAF6EE] lg:flex animate-fadeIn">
          {sidebarContent}
        </aside>
      )}

      {/* Mobile Drawer Backdrop */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-[#17232A]/30 backdrop-blur-xs transition-opacity lg:hidden"
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 transform bg-[#FAF6EE] shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebarContent}
      </aside>
    </>
  );
}