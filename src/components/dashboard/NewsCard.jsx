import { useState } from "react";
import {
  Bookmark,
  Clock3,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const NewsCard = ({ news }) => {
  const [bookmarked, setBookmarked] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  return (
    <article className="overflow-hidden rounded-2xl glass-card glass-card-hover transition-all duration-200">
      {/* News Image */}
      {news.image && (
        <div className="relative h-48 w-full overflow-hidden sm:h-52 bg-[#FAF6EE]">
          <img
            src={news.image}
            alt={news.title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-101"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <span className="rounded-lg glass-pill px-2.5 py-1 text-xs font-semibold text-[#17232A]">
              {news.category}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-lg font-bold leading-snug tracking-tight text-[#17232A] hover:text-[#299F95] transition-colors cursor-pointer">
          {news.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-[#5F6B70]">
          {news.description}
        </p>

        {/* Metadata Footer */}
        <div className="mt-4 flex items-center justify-between border-t border-[#F0E8DC] pt-3">
          <div className="flex items-center gap-3 text-xs text-[#5F6B70]">
            <div className="flex items-center gap-1.5">
              <Clock3 size={13} className="text-[#299F95]" />
              <span>{news.readTime} min read</span>
            </div>
            <span>•</span>
            <span className="font-semibold text-[#17232A]">{news.source}</span>
          </div>

          <button
            onClick={() => setBookmarked(!bookmarked)}
            className={`rounded-lg p-1.5 transition cursor-pointer ${
              bookmarked
                ? "bg-[#299F95]/10 text-[#299F95]"
                : "text-[#5F6B70] hover:bg-[#FAF6EE] hover:text-[#17232A]"
            }`}
            title={bookmarked ? "Remove Bookmark" : "Save Article"}
            aria-label="Bookmark article"
          >
            <Bookmark size={16} className={bookmarked ? "fill-[#299F95]" : ""} />
          </button>
        </div>

        {/* Collapsible AI Summary */}
        <div className="mt-3.5">
          <button
            onClick={() => setShowSummary(!showSummary)}
            className="flex w-full items-center justify-between rounded-lg border border-[#299F95]/25 bg-[#299F95]/5 px-3.5 py-2 text-xs font-semibold text-[#299F95] transition hover:bg-[#299F95]/10 cursor-pointer"
          >
            <div className="flex items-center gap-1.5">
              <Sparkles size={14} />
              <span>{showSummary ? "Hide Key Takeaways" : "View AI Key Takeaways"}</span>
            </div>
            {showSummary ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {showSummary && (
            <div className="mt-2.5 rounded-lg border border-[#E8DFD1] bg-[#FAF6EE] p-3.5 text-xs leading-relaxed text-[#17232A] animate-fadeIn">
              <p className="font-semibold text-[#17232A] mb-1.5">Key Takeaways:</p>
              <ul className="list-disc pl-4 space-y-1 text-[#5F6B70]">
                <li>Breakthrough in reasoning architectures with low-latency APIs.</li>
                <li>Relevant to projects in machine learning, agents, and automation pipelines.</li>
                <li>Open-source checkpoints available for benchmark testing.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default NewsCard;