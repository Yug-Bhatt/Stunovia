import {
  FileText,
  CalendarDays,
  BookOpen,
  Sparkles,
  ExternalLink,
  Bookmark,
} from "lucide-react";

const papers = [
  {
    id: 1,
    title: "Attention Is All You Need",
    authors: "Ashish Vaswani et al.",
    source: "arXiv",
    category: "Artificial Intelligence",
    date: "Jun 12, 2026",
    readTime: "12 min",
    relevance: 96,
    description:
      "A foundational research paper introducing the Transformer architecture and its attention-based approach to sequence modeling.",
  },
  {
    id: 2,
    title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP",
    authors: "Patrick Lewis et al.",
    source: "Research Archive",
    category: "Generative AI",
    date: "Jun 08, 2026",
    readTime: "10 min",
    relevance: 92,
    description:
      "Research exploring how external knowledge retrieval can improve the factuality and usefulness of language model responses.",
  },
  {
    id: 3,
    title: "Scaling Machine Learning Systems for Real-World Applications",
    authors: "AI Systems Research Group",
    source: "arXiv",
    category: "Machine Learning",
    date: "May 28, 2026",
    readTime: "8 min",
    relevance: 87,
    description:
      "An overview of practical challenges and approaches for deploying machine learning systems reliably at scale.",
  },
];

const ResearchPapers = () => {
  return (
    <div className="text-white">

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <FileText className="text-violet-400" size={30} />

          <h1 className="text-3xl font-bold">
            Research Papers
          </h1>
        </div>

        <p className="mt-2 text-slate-400">
          Discover research papers relevant to your interests and career goals.
        </p>
      </div>

      {/* AI Recommendation Banner */}
      <div className="mb-8 flex items-start gap-4 rounded-2xl border border-violet-500/30 bg-violet-500/10 p-5">

        <Sparkles className="mt-1 text-violet-400" size={22} />

        <div>
          <h2 className="font-semibold">
            AI Research Recommendations
          </h2>

          <p className="mt-1 text-sm leading-6 text-slate-400">
            Stunovia analyzes your interests and recommends research
            papers that can help you stay updated with developments
            in your chosen fields.
          </p>
        </div>

      </div>

      {/* Papers */}
      <div className="space-y-5">

        {papers.map((paper) => (
          <article
            key={paper.id}
            className="rounded-2xl border border-slate-800 bg-[#111827] p-6 transition hover:border-violet-500/50"
          >

            {/* Top Section */}
            <div className="flex items-start justify-between gap-6">

              <div className="flex-1">

                <div className="flex flex-wrap items-center gap-2">

                  <span className="rounded-full bg-violet-600/20 px-3 py-1 text-xs font-medium text-violet-300">
                    {paper.category}
                  </span>

                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">
                    {paper.source}
                  </span>

                </div>

                <h2 className="mt-3 text-2xl font-bold">
                  {paper.title}
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  {paper.authors}
                </p>

              </div>

              {/* Relevance */}
              <div className="min-w-[110px] rounded-xl bg-violet-500/10 px-4 py-3 text-center">

                <p className="text-xs text-violet-300">
                  Relevance
                </p>

                <p className="text-2xl font-bold text-violet-400">
                  {paper.relevance}%
                </p>

              </div>

            </div>

            {/* Description */}
            <p className="mt-5 leading-7 text-slate-400">
              {paper.description}
            </p>

            {/* Details */}
            <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-slate-400">

              <span className="flex items-center gap-2">
                <CalendarDays size={16} />
                {paper.date}
              </span>

              <span className="flex items-center gap-2">
                <BookOpen size={16} />
                {paper.readTime} read
              </span>

            </div>

            {/* Bottom */}
            <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-5">

              <div className="flex items-center gap-2 text-sm text-violet-400">
                <Sparkles size={17} />
                Recommended for you
              </div>

              <div className="flex items-center gap-3">

                <button
                  className="rounded-xl border border-slate-700 p-2.5 text-slate-400 transition hover:border-violet-500 hover:text-violet-400"
                  title="Bookmark"
                >
                  <Bookmark size={18} />
                </button>

                <button className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-medium transition hover:bg-violet-700">
                  Read Paper
                  <ExternalLink size={17} />
                </button>

              </div>

            </div>

          </article>
        ))}

      </div>

    </div>
  );
};

export default ResearchPapers;