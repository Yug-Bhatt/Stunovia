import {
  Bookmark,
  Clock3,
  Sparkles,
  ExternalLink,
} from "lucide-react";

const NewsCard = ({ news }) => {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-800 bg-[#111827]">

      {/* News Image */}
      <img
        src={news.image}
        alt={news.title}
        className="h-60 w-full object-cover"
      />

      {/* Content */}
      <div className="p-6">

        {/* Tags */}
        <div className="mb-4 flex gap-2">

          <span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-medium">
            {news.category}
          </span>

          {news.trending && (
            <span className="rounded-full bg-slate-700 px-3 py-1 text-xs font-medium">
              Trending
            </span>
          )}

        </div>

        {/* Title */}
        <h2 className="mb-3 text-2xl font-bold leading-tight">
          {news.title}
        </h2>

        {/* Description */}
        <p className="leading-7 text-slate-400">
          {news.description}
        </p>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">

          <div className="flex items-center gap-5 text-sm text-slate-400">

            <div className="flex items-center gap-2">
              <Clock3 size={16} />
              <span>{news.readTime} min read</span>
            </div>

            <span>{news.source}</span>

          </div>

          <button
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-violet-500"
            title="Bookmark"
          >
            <Bookmark size={20} />
          </button>

        </div>

        {/* AI Summary */}
        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 font-medium transition hover:bg-violet-700">

          <Sparkles size={18} />

          <span>AI Summary</span>

          <ExternalLink size={18} />

        </button>

      </div>

    </article>
  );
};

export default NewsCard;