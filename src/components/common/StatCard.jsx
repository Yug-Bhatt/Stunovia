const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-[#111827] border border-slate-800 rounded-2xl p-5 hover:border-violet-500 transition-all duration-300">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-slate-400 text-sm">{title}</p>

          <h2 className="text-white text-3xl font-bold mt-2">
            {value}
          </h2>

          <p className="text-green-400 text-sm mt-3">
            +2 new
          </p>
        </div>

        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center ${color}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;