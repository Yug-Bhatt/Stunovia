const InterestChip = ({ title, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center rounded-lg border px-3 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
        active
          ? "border-[#299F95] bg-[#299F95] text-white shadow-xs"
          : "border-[#E8DFD1] bg-white text-[#5F6B70] hover:border-[#299F95] hover:text-[#17232A]"
      }`}
    >
      <span className="mr-1 opacity-60">#</span>
      {title}
    </button>
  );
};

export default InterestChip;
