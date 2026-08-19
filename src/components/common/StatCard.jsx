import BorderGlow from "./BorderGlow";

const ACCENT_STYLES = {
  teal: {
    iconContainer: "border-[#299F95]/30 bg-[#299F95]/10 text-[#299F95]",
    badge: "bg-[#299F95]/10 text-[#299F95] border border-[#299F95]/20",
    dot: "bg-[#299F95]",
    glowColor: "175 59 39",
    colors: ["#299F95", "#EAC96B", "#E96D51"],
  },
  mustard: {
    iconContainer: "border-[#EAC96B]/50 bg-[#FBF4DC] text-[#B88B22]",
    badge: "bg-[#FBF4DC] text-[#B88B22] border border-[#EAC96B]/40",
    dot: "bg-[#B88B22]",
    glowColor: "44 75 67",
    colors: ["#EAC96B", "#299F95", "#E96D51"],
  },
  coral: {
    iconContainer: "border-[#F3B3A3]/50 bg-[#FCECE8] text-[#E96D51]",
    badge: "bg-[#FCECE8] text-[#E96D51] border border-[#F3B3A3]/40",
    dot: "bg-[#E96D51]",
    glowColor: "11 78 62",
    colors: ["#E96D51", "#EAC96B", "#299F95"],
  },
  neutral: {
    iconContainer: "border-[#E8DFD1] bg-[#FAF6EE] text-[#5F6B70]",
    badge: "bg-[#FAF6EE] text-[#5F6B70] border border-[#E8DFD1]",
    dot: "bg-[#5F6B70]",
    glowColor: "175 59 39",
    colors: ["#299F95", "#EAC96B", "#5F6B70"],
  },
};

const StatCard = ({
  title,
  value,
  subtitle,
  meta,
  badge,
  badgeDot = false,
  icon: Icon,
  accentType = "teal",
}) => {
  const accent = ACCENT_STYLES[accentType] || ACCENT_STYLES.teal;

  return (
    <BorderGlow
      borderRadius={16}
      glowColor={accent.glowColor}
      colors={accent.colors}
      backgroundColor="#FFFFFF"
      edgeSensitivity={35}
      glowRadius={32}
      glowIntensity={0.9}
      className="h-full"
    >
      <div className="group relative flex h-full flex-col justify-between p-5">
        {/* Top Header: Uppercase Label + Stylized Icon */}
        <div className="flex items-center justify-between gap-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#5F6B70]">
            {title}
          </span>
          {Icon && (
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-transform duration-200 group-hover:scale-105 ${accent.iconContainer}`}
            >
              <Icon size={17} />
            </div>
          )}
        </div>

        {/* Primary Value & Contextual Badge */}
        <div className="my-2.5 flex items-baseline justify-between gap-2">
          <div className="text-3xl font-extrabold tracking-tight text-[#17232A]">
            {value}
          </div>
          {badge && (
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10.5px] font-semibold ${accent.badge}`}
            >
              {badgeDot && (
                <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
              )}
              {badge}
            </span>
          )}
        </div>

        {/* Supporting Information Footer with Subtle Divider */}
        <div className="flex items-center justify-between gap-2 border-t border-[#F0E8DC] pt-2.5 text-xs text-[#5F6B70]">
          <span className="truncate font-medium text-[#5F6B70]">
            {subtitle}
          </span>
          {meta && (
            <span className="shrink-0 text-[11px] font-semibold text-[#17232A]">
              {meta}
            </span>
          )}
        </div>
      </div>
    </BorderGlow>
  );
};

export default StatCard;