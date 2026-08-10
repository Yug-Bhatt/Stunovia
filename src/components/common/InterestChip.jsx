const InterestChip = ({ title, active }) => {
  return (
    <button
      className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
        active
          ? "bg-violet-600 text-white"
          : "bg-[#111827] text-slate-300 border border-slate-700 hover:border-violet-500"
      }`}
    >
      {title}
    </button>
  );
};

export default InterestChip;
