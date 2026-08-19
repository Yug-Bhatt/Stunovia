import { useState } from "react";
import {
  Newspaper,
  Sparkles,
  Clock3,
  Bookmark,
  ExternalLink,
  Search,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const feedArticles = [
  {
    id: 1,
    title: "OpenAI launches GPT-5.5 with major reasoning improvements",
    category: "AI & ML",
    categoryColor: "teal",
    source: "OpenAI Research",
    published: "2 hours ago",
    readTime: 5,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    description:
      "OpenAI introduced GPT-5.5 featuring improved mathematical reasoning, code synthesis capabilities, and lower latency for developers building agents.",
    summary:
      "Focuses on advanced reasoning step verification and reduces hallucinations in technical coding tasks. Directly useful for student AI builders.",
  },
  {
    id: 2,
    title: "AI-powered development is changing how software is built in 2026",
    category: "Web Development",
    categoryColor: "coral",
    source: "TechCrunch",
    published: "4 hours ago",
    readTime: 7,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200",
    description:
      "Developers are increasingly leveraging AI coding assistants and agentic IDEs to accelerate full-stack engineering from hours to minutes.",
    summary:
      "Explores shifts towards architecture-level engineering over manual boilerplate writing. Recommends mastering system design and testing.",
  },
  {
    id: 3,
    title: "New AI research pushes boundaries of mathematical problem solving",
    category: "Research",
    categoryColor: "mustard",
    source: "arXiv Archive",
    published: "Yesterday",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200",
    description:
      "Researchers are developing formal theorem proving systems capable of solving International Mathematical Olympiad grade challenges.",
    summary:
      "Highlights novel reinforcement learning search algorithms on formal languages like Lean 4 and Coq.",
  },
  {
    id: 4,
    title: "State of Data Science & Big Data Engineering for Students",
    category: "Data Science",
    categoryColor: "teal",
    source: "Towards Data Science",
    published: "2 days ago",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    description:
      "A comprehensive guide on modern data stacks, Apache Iceberg, Polars, and foundational knowledge required for modern data science roles.",
    summary:
      "Covers the modern transition towards vector databases, high-performance dataframes, and automated data pipelines.",
  },
];

const MyFeed = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSummary, setExpandedSummary] = useState(null);
  const [bookmarks, setBookmarks] = useState({});

  const categories = ["All", "AI & ML", "Data Science", "Web Development", "Research"];

  const filteredArticles = feedArticles.filter((article) => {
    const matchesCat = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleBookmark = (id) => {
    setBookmarks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getTagClasses = (color) => {
    switch (color) {
      case "teal":
        return "bg-[#299F95]/15 text-[#299F95] border-[#299F95]/30";
      case "coral":
        return "bg-[#E96D51]/15 text-[#E96D51] border-[#E96D51]/30";
      case "mustard":
        return "bg-[#EAC96B]/25 text-[#8F680D] border-[#EAC96B]/50";
      default:
        return "bg-[#FAF6EE] text-[#17232A] border-[#E8DFD1]";
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E96D51]/10 text-[#E96D51]">
            <Newspaper size={22} />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#17232A] sm:text-3xl">
              My Personalized Intelligence Feed
            </h1>
            <p className="mt-0.5 text-sm text-[#5F6B70]">
              Technology news, AI breakthroughs, and industry trends filtered by your academic profile.
            </p>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="rounded-2xl border border-[#E8DFD1] bg-white p-4 shadow-2xs space-y-3.5">
        <div className="relative">
          <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5F6B70]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search feed articles by topic, keywords, or source..."
            className="w-full rounded-xl border border-[#E8DFD1] bg-[#FAF6EE]/50 py-2.5 pl-10 pr-4 text-sm text-[#17232A] placeholder-[#5F6B70] outline-none transition focus:border-[#299F95] focus:bg-white focus:ring-2 focus:ring-[#299F95]/15"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 border-t border-[#F0E8DC] pt-3">
          <span className="flex items-center gap-1 text-xs font-semibold text-[#5F6B70] mr-1">
            <SlidersHorizontal size={13} />
            Category:
          </span>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-3.5 py-1 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === category
                  ? "border-[#299F95] bg-[#299F95] text-white shadow-2xs"
                  : "border-[#E8DFD1] bg-white text-[#17232A] hover:border-[#299F95] hover:bg-[#299F95]/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E8DFD1] bg-white shadow-2xs transition-all duration-200 hover:shadow-md hover:border-[#299F95]/40"
          >
            <div>
              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden bg-[#FFF3DC]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-102"
                />
                <span
                  className={`absolute top-3 left-3 rounded-full border px-3 py-0.5 text-xs font-semibold backdrop-blur-md ${getTagClasses(
                    article.categoryColor
                  )}`}
                >
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-[#5F6B70]">
                  <span className="font-semibold text-[#17232A]">{article.source}</span>
                  <span>•</span>
                  <span>{article.published}</span>
                </div>

                <h2 className="mt-2 text-lg font-bold leading-snug tracking-tight text-[#17232A]">
                  {article.title}
                </h2>

                <p className="mt-2 text-xs leading-relaxed text-[#5F6B70]">
                  {article.description}
                </p>

                {/* AI Summary Drawer */}
                {expandedSummary === article.id && (
                  <div className="mt-3 rounded-xl border border-[#299F95]/20 bg-[#FAF6EE] p-3.5 text-xs leading-relaxed text-[#17232A]">
                    <div className="flex items-center gap-1.5 font-bold text-[#299F95] mb-1">
                      <Sparkles size={14} />
                      <span>Student Key Takeaways</span>
                    </div>
                    <p className="text-[#5F6B70]">{article.summary}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between border-t border-[#F0E8DC] px-5 py-3.5 bg-[#FAF6EE]/40">
              <div className="flex items-center gap-1.5 text-xs text-[#5F6B70]">
                <Clock3 size={13} className="text-[#299F95]" />
                <span>{article.readTime} min read</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setExpandedSummary(expandedSummary === article.id ? null : article.id)
                  }
                  className="flex items-center gap-1 rounded-lg border border-[#299F95]/30 bg-[#299F95]/10 px-2.5 py-1 text-xs font-bold text-[#299F95] transition hover:bg-[#299F95]/20"
                >
                  <Sparkles size={12} />
                  <span>AI Takeaway</span>
                  {expandedSummary === article.id ? (
                    <ChevronUp size={13} />
                  ) : (
                    <ChevronDown size={13} />
                  )}
                </button>

                <button
                  onClick={() => toggleBookmark(article.id)}
                  className={`rounded-lg p-1.5 transition ${
                    bookmarks[article.id]
                      ? "bg-[#FFF3DC] text-[#E96D51]"
                      : "text-[#5F6B70] hover:bg-[#FAF6EE] hover:text-[#17232A]"
                  }`}
                  title="Bookmark"
                >
                  <Bookmark
                    size={16}
                    className={bookmarks[article.id] ? "fill-[#E96D51]" : ""}
                  />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default MyFeed;