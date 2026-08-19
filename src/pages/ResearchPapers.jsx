import { useState } from "react";
import {
  FileText,
  CalendarDays,
  BookOpen,
  Sparkles,
  ExternalLink,
  Bookmark,
  Search,
  SlidersHorizontal,
} from "lucide-react";

const papersList = [
  {
    id: 1,
    title: "Attention Is All You Need",
    authors: "Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, et al.",
    source: "arXiv / Google Brain",
    category: "Artificial Intelligence",
    date: "Jun 12, 2026",
    readTime: "12 min read",
    doi: "1706.03762",
    description:
      "The foundational research paper introducing the Transformer architecture and its multi-head attention mechanism, revolutionizing modern NLP and generative vision.",
  },
  {
    id: 2,
    title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
    authors: "Patrick Lewis, Ethan Perez, Aleksandara Piktus, Fabio Petroni, et al.",
    source: "arXiv / Meta AI",
    category: "Generative AI",
    date: "Jun 08, 2026",
    readTime: "10 min read",
    doi: "2005.11401",
    description:
      "Groundbreaking work exploring parametric memory combined with non-parametric retrieval to enhance factual correctness and groundability in language model responses.",
  },
  {
    id: 3,
    title: "Scaling Machine Learning Systems for Real-World Production Deployments",
    authors: "Distributed AI Systems Engineering Group",
    source: "arXiv / System ML",
    date: "May 28, 2026",
    readTime: "8 min read",
    doi: "2405.09912",
    description:
      "A comprehensive review of engineering challenges, quantization techniques, low-latency serving pipelines, and fault tolerance when deploying multi-billion parameter models.",
  },
];

const ResearchPapers = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [bookmarks, setBookmarks] = useState({});

  const categories = ["All", "Artificial Intelligence", "Generative AI", "Systems & ML"];

  const filteredPapers = papersList.filter((paper) => {
    const matchesCategory =
      selectedCategory === "All" || paper.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleBookmark = (id) => {
    setBookmarks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#299F95]/10 text-[#299F95]">
            <FileText size={22} />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#17232A] sm:text-3xl">
              Research Papers & Academic Publications
            </h1>
            <p className="mt-0.5 text-sm text-[#5F6B70]">
              Discover seminal and trending AI/ML literature curated for computer science students.
            </p>
          </div>
        </div>
      </div>

      {/* AI Recommendation Banner */}
      <div className="flex flex-col sm:flex-row items-start gap-3.5 rounded-2xl border border-[#299F95]/30 bg-[#FFF3DC]/80 p-5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#299F95] text-white">
          <Sparkles size={17} />
        </div>
        <div>
          <h2 className="text-sm font-bold text-[#17232A]">
            AI Literature Matching
          </h2>
          <p className="mt-0.5 text-xs leading-relaxed text-[#5F6B70]">
            Stunovia matches academic preprints and publications with your current course focus and stated career goals to accelerate your research projects.
          </p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="rounded-2xl border border-[#E8DFD1] bg-white p-4 shadow-2xs space-y-3.5">
        <div className="relative">
          <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5F6B70]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search papers by title, author, topic, or arXiv ID..."
            className="w-full rounded-xl border border-[#E8DFD1] bg-[#FAF6EE]/50 py-2.5 pl-10 pr-4 text-sm text-[#17232A] placeholder-[#5F6B70] outline-none transition focus:border-[#299F95] focus:bg-white focus:ring-2 focus:ring-[#299F95]/15"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 border-t border-[#F0E8DC] pt-3">
          <span className="flex items-center gap-1 text-xs font-semibold text-[#5F6B70] mr-1">
            <SlidersHorizontal size={13} />
            Field:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full border px-3.5 py-1 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "border-[#299F95] bg-[#299F95] text-white shadow-2xs"
                  : "border-[#E8DFD1] bg-white text-[#17232A] hover:border-[#299F95] hover:bg-[#299F95]/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Papers List */}
      <div className="space-y-5">
        {filteredPapers.map((paper) => (
          <article
            key={paper.id}
            className="group rounded-2xl border border-[#E8DFD1] bg-white p-6 shadow-2xs transition-all duration-200 hover:shadow-md hover:border-[#299F95]/50"
          >
            {/* Top */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#299F95]/10 px-3 py-0.5 text-xs font-semibold text-[#299F95]">
                    {paper.category}
                  </span>
                  <span className="rounded-md border border-[#E8DFD1] bg-[#FAF6EE] px-2 py-0.5 text-[11px] font-medium text-[#5F6B70]">
                    {paper.source}
                  </span>
                </div>

                <h2 className="mt-2 text-xl font-bold tracking-tight text-[#17232A] group-hover:text-[#299F95] transition-colors">
                  {paper.title}
                </h2>

                <p className="mt-1 text-xs font-medium text-[#5F6B70]">
                  {paper.authors}
                </p>

                <p className="mt-3 text-xs leading-relaxed text-[#5F6B70]">
                  {paper.description}
                </p>

                {/* Details */}
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#5F6B70]">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays size={14} className="text-[#299F95]" />
                    <span>{paper.date}</span>
                  </span>

                  <span className="flex items-center gap-1.5">
                    <BookOpen size={14} className="text-[#B88B22]" />
                    <span>{paper.readTime}</span>
                  </span>

                  <span className="rounded-md bg-[#FFF3DC] px-2 py-0.5 text-[10px] font-mono font-semibold text-[#8F680D]">
                    arXiv:{paper.doi}
                  </span>
                </div>
              </div>

              {/* Match Score Box (Honest Coming Soon) */}
              <div className="flex sm:flex-col items-center justify-between sm:justify-center rounded-xl border border-[#E8DFD1] bg-[#FAF6EE] px-4 py-2.5 text-center shrink-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#5F6B70]">
                  Topic Match
                </span>
                <span className="text-xl font-bold text-[#5F6B70]">
                  —
                </span>
                <span className="text-[10px] text-[#5F6B70]">
                  Coming soon
                </span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-5 flex items-center justify-between border-t border-[#F0E8DC] pt-4">
              <div className="flex items-center gap-1.5 text-xs text-[#299F95]">
                <Sparkles size={14} />
                <span className="font-semibold">Recommended for AI / ML Track</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleBookmark(paper.id)}
                  className={`rounded-xl border border-[#E8DFD1] p-2 transition ${
                    bookmarks[paper.id]
                      ? "bg-[#FFF3DC] text-[#E96D51]"
                      : "bg-white text-[#5F6B70] hover:bg-[#FAF6EE] hover:text-[#17232A]"
                  }`}
                  title="Bookmark Paper"
                >
                  <Bookmark
                    size={16}
                    className={bookmarks[paper.id] ? "fill-[#E96D51]" : ""}
                  />
                </button>

                <button className="flex items-center gap-1.5 rounded-xl bg-[#299F95] px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-[#22847C]">
                  <span>Read Paper</span>
                  <ExternalLink size={13} />
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