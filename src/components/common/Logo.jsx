import React from "react";

export function StunoviaIcon({ size = 42, className = "" }) {
  return (
    <img
      src="/logos/stunovia-icon.svg"
      alt="Stunovia Icon"
      className={`shrink-0 object-contain drop-shadow-xs transition-transform duration-200 ${className}`}
      style={{
        width: `${size}px`,
        height: "auto",
        maxHeight: `${Math.round(size * 0.85)}px`,
      }}
      loading="eager"
    />
  );
}

export default function Logo({
  variant = "full", // "full" | "compact" | "icon"
  iconSize = 42,
  className = "",
}) {
  if (variant === "icon") {
    return <StunoviaIcon size={iconSize} className={className} />;
  }

  return (
    <div className={`inline-flex items-center gap-2.5 min-w-0 select-none ${className}`}>
      {/* Stunovia Stylized S Icon */}
      <StunoviaIcon size={iconSize} />

      {/* Typography: Stunovia + Student Intelligence Platform */}
      <div className="flex flex-col justify-center leading-none min-w-0">
        <span
          className="font-extrabold text-[#167C74] tracking-tight truncate"
          style={{
            fontSize: "19px",
            lineHeight: 1.1,
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          Stunovia
        </span>
        {variant === "full" && (
          <span
            className="font-medium text-[#5F6B70] tracking-normal mt-0.5 whitespace-nowrap"
            style={{
              fontSize: "9.5px",
              lineHeight: 1.15,
              fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
            }}
          >
            Student Intelligence Platform
          </span>
        )}
      </div>
    </div>
  );
}
