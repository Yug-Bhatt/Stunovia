import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AIWidget = () => {
  return (
    <div className="rounded-2xl border border-[#299F95]/30 bg-[#FFF3DC] p-5 shadow-2xs">
      <div className="flex items-center gap-2 text-[#299F95]">
        <Sparkles size={18} />
        <h3 className="text-sm font-bold text-[#17232A]">AI Career Insights</h3>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-[#5F6B70]">
        Stunovia continuously analyzes newly published internships, hackathons, and research preprints to keep your academic roadmap optimized.
      </p>
      <Link
        to="/ai-assistant"
        className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-bold text-[#299F95] transition hover:text-[#22847C]"
      >
        <span>Consult Career Assistant</span>
        <ArrowRight size={13} />
      </Link>
    </div>
  );
};

export default AIWidget;