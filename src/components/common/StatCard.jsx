const StatCard = ({ title, value, label, icon: Icon, isHero = false }) => {
  return (
    <div className="flex flex-col justify-between rounded-2xl glass-card glass-card-hover p-6 transition-all duration-200">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#5F6B70]">
            {title}
          </p>
          <div className="mt-3">
            <h3 className="text-3xl font-bold tracking-tight text-[#17232A]">
              {value}
            </h3>
          </div>
        </div>

        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors ${
            isHero
              ? "border-[#299F95]/30 bg-[#299F95]/10 text-[#299F95] shadow-2xs"
              : "border-[#E8DFD1] bg-[#FAF6EE]/80 text-[#5F6B70]"
          }`}
        >
          <Icon size={18} />
        </div>
      </div>

      {label && (
        <div className="mt-4 pt-3 border-t border-[#F0E8DC]/80">
          <p className="text-xs text-[#5F6B70]">
            {label}
          </p>
        </div>
      )}
    </div>
  );
};

export default StatCard;