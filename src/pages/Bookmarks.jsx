import { useState } from "react";
import {
  Bookmark,
  Newspaper,
  Briefcase,
  Trophy,
  FileText,
  Clock3,
  ExternalLink,
  Trash2,
  Search,
} from "lucide-react";

const initialBookmarks = [
  {
    id: 1,
    type: "News",
    icon: Newspaper,
    title: "OpenAI introduces major improvements in AI reasoning with GPT-5.5",
    description:
      "Latest developments in AI models, formal reasoning verification, and low-latency developer APIs.",
    source: "OpenAI Research",
    time: "5 min read",
    color: "teal",
  },
  {
    id: 2,
    type: "Opportunity",
    icon: Briefcase,
    title: "AI / Machine Learning Engineering Intern",
    description:
      "Engineering opportunity focused on Python, model evaluation, API integrations, and vector search pipelines.",
    source: "Verified Partner Feed",
    time: "Deadline in 12 days",
    color: "coral",
  },
  {
    id: 3,
    type: "Hackathon",
    icon: Trophy,
    title: "AI Innovation Challenge 2026",
    description:
      "Build innovative AI solutions, agentic workflows, and compete with university teams globally.",
    source: "Tech Innovators Foundation",
    time: "Aug 22–24",
    color: "mustard",
  },
  {
    id: 4,
    type: "Research Paper",
    icon: FileText,
    title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP",
    description:
      "Seminal paper exploring parametric and non-parametric memory in language model applications.",
    source: "arXiv:2005.11401",
    time: "10 min read",
    color: "teal",
  },
];

const Bookmarks = () => {
  const [items, setItems] = useState(initialBookmarks);
  const [searchQuery, setSearchQuery] = useState("");

  const handleRemove = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredItems = items.filter(
    (item) =>
      !searchQuery ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.source.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getTagClasses = (color) => {
    switch (color) {
      case "teal":
        return "bg-[#299F95]/10 text-[#299F95] border-[#299F95]/30";
      case "coral":
        return "bg-[#E96D51]/10 text-[#E96D51] border-[#E96D51]/30";
      case "mustard":
        return "bg-[#EAC96B]/20 text-[#8F680D] border-[#EAC96B]/50";
      default:
        return "bg-[#FAF6EE] text-[#17232A] border-[#E8DFD1]";
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAC96B]/25 text-[#B88B22]">
            <Bookmark size={22} />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#17232A] sm:text-3xl">
              Saved Bookmarks & Resources
            </h1>
            <p className="mt-0.5 text-sm text-[#5F6B70]">
              Quickly access saved articles, opportunities, research papers, and competitions.
            </p>
          </div>
        </div>
      </div>

      {/* Bookmark Summary Stats */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-2xl border border-[#E8DFD1] bg-white p-4 shadow-2xs">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#5F6B70]">
            Total Saved
          </p>
          <p className="mt-1.5 text-2xl font-bold text-[#17232A]">{items.length}</p>
        </div>

        <div className="rounded-2xl border border-[#E8DFD1] bg-white p-4 shadow-2xs">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#299F95]">
            News
          </p>
          <p className="mt-1.5 text-2xl font-bold text-[#299F95]">
            {items.filter((i) => i.type === "News").length}
          </p>
        </div>

        <div className="rounded-2xl border border-[#E8DFD1] bg-white p-4 shadow-2xs">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#E96D51]">
            Opportunities
          </p>
          <p className="mt-1.5 text-2xl font-bold text-[#E96D51]">
            {items.filter((i) => i.type === "Opportunity").length}
          </p>
        </div>

        <div className="rounded-2xl border border-[#E8DFD1] bg-white p-4 shadow-2xs">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#B88B22]">
            Research
          </p>
          <p className="mt-1.5 text-2xl font-bold text-[#B88B22]">
            {items.filter((i) => i.type === "Research Paper").length}
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5F6B70]" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search saved items..."
          className="w-full rounded-2xl border border-[#E8DFD1] bg-white py-3 pl-10 pr-4 text-sm text-[#17232A] placeholder-[#5F6B70] shadow-2xs outline-none transition focus:border-[#299F95] focus:ring-2 focus:ring-[#299F95]/15"
        />
      </div>

      {/* Items List */}
      <div className="space-y-4">
        {filteredItems.length === 0 ? (
          <div className="rounded-2xl border border-[#E8DFD1] bg-white p-12 text-center shadow-2xs">
            <Bookmark size={30} className="mx-auto text-[#5F6B70]/60 mb-2" />
            <p className="text-sm font-bold text-[#17232A]">No saved bookmarks found</p>
            <p className="text-xs text-[#5F6B70] mt-1">
              Click the bookmark icon on any opportunity, news article, or paper to save it here.
            </p>
          </div>
        ) : (
          filteredItems.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.id}
                className="group rounded-2xl border border-[#E8DFD1] bg-white p-5 shadow-2xs transition-all duration-200 hover:shadow-md hover:border-[#299F95]/50"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FAF6EE] text-[#299F95] border border-[#E8DFD1]">
                    <Icon size={20} />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${getTagClasses(
                          item.color
                        )}`}
                      >
                        {item.type}
                      </span>
                      <span className="text-xs text-[#5F6B70]">•</span>
                      <span className="text-xs font-semibold text-[#5F6B70]">
                        {item.source}
                      </span>
                    </div>

                    <h2 className="mt-1.5 text-base font-bold text-[#17232A] group-hover:text-[#299F95] transition-colors">
                      {item.title}
                    </h2>

                    <p className="mt-1 text-xs leading-relaxed text-[#5F6B70]">
                      {item.description}
                    </p>

                    <div className="mt-3 flex items-center gap-1.5 text-[11px] font-medium text-[#5F6B70]">
                      <Clock3 size={13} className="text-[#299F95]" />
                      <span>{item.time}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 items-center gap-1.5">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="rounded-xl border border-[#E8DFD1] p-2 text-[#5F6B70] transition hover:border-[#E96D51] hover:bg-[#FFF3DC] hover:text-[#E96D51]"
                      title="Remove Bookmark"
                    >
                      <Trash2 size={16} />
                    </button>

                    <button
                      className="flex items-center gap-1 rounded-xl bg-[#299F95] px-3 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-[#22847C]"
                      title="Open Resource"
                    >
                      <span className="hidden sm:inline">Open</span>
                      <ExternalLink size={13} />
                    </button>
                  </div>
                </div>
              </article>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Bookmarks;