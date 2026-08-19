// Component added by Ansh - github.com/ansh-dhanani
// GradualBlur - Progressive multi-layer backdrop blur effect

import React from "react";

/**
 * Calculates progressive blur values and mask stops based on curve type and layer count.
 */
const getProgressiveLayerStyles = ({
  index,
  totalDivs,
  position,
  strength = 2,
  curve = "bezier",
  exponential = false,
  opacity = 1,
  color,
}) => {
  const step = (index + 1) / totalDivs;
  
  // Calculate progress weight based on curve
  let progress = step;
  if (curve === "bezier" || curve === "ease-out") {
    progress = Math.sin((step * Math.PI) / 2);
  } else if (curve === "ease-in") {
    progress = 1 - Math.cos((step * Math.PI) / 2);
  } else if (curve === "ease-in-out") {
    progress = 0.5 * (1 - Math.cos(step * Math.PI));
  }

  if (exponential) {
    progress = Math.pow(progress, 1.5);
  }

  // Progressive blur calculation
  const blurAmount = (progress * strength * 6).toFixed(2);
  const layerOpacity = (progress * opacity).toFixed(2);

  // Gradient mask stops for progressive falloff
  const maskDirection =
    position === "top"
      ? "to top"
      : position === "bottom"
      ? "to bottom"
      : position === "left"
      ? "to left"
      : "to right";

  const startPercent = Math.max(0, ((index) / totalDivs) * 100).toFixed(1);
  const endPercent = Math.min(100, ((index + 1) / totalDivs) * 100).toFixed(1);

  const maskImage = `linear-gradient(${maskDirection}, rgba(0,0,0,0) ${startPercent}%, rgba(0,0,0,1) ${endPercent}%)`;

  const baseStyle = {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    backdropFilter: `blur(${blurAmount}px)`,
    WebkitBackdropFilter: `blur(${blurAmount}px)`,
    maskImage,
    WebkitMaskImage: maskImage,
    opacity: layerOpacity,
    zIndex: index + 1,
  };

  if (color) {
    baseStyle.background = `linear-gradient(${maskDirection}, transparent, ${color})`;
  }

  return baseStyle;
};

const GradualBlur = ({
  target = "parent",
  position = "bottom",
  height = "6rem",
  width,
  strength = 2,
  divCount = 5,
  curve = "bezier",
  exponential = true,
  opacity = 1,
  color,
  className = "",
  style = {},
}) => {
  const isVertical = position === "top" || position === "bottom";
  const dimensionStyle = isVertical
    ? {
        height: typeof height === "number" ? `${height}px` : height,
        left: 0,
        right: 0,
        ...(position === "top" ? { top: 0 } : { bottom: 0 }),
      }
    : {
        width: typeof width === "number" ? `${width}px` : width || height,
        top: 0,
        bottom: 0,
        ...(position === "left" ? { left: 0 } : { right: 0 }),
      };

  const layers = Array.from({ length: Math.max(1, divCount) });

  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{
        position: target === "page" ? "fixed" : "absolute",
        overflow: "hidden",
        zIndex: 20,
        ...dimensionStyle,
        ...style,
      }}
      aria-hidden="true"
    >
      {layers.map((_, i) => {
        const layerStyle = getProgressiveLayerStyles({
          index: i,
          totalDivs: divCount,
          position,
          strength,
          curve,
          exponential,
          opacity,
          color,
        });

        return <div key={i} style={layerStyle} />;
      })}
    </div>
  );
};

export default GradualBlur;
