import { useState } from "react";
import {
  Code2,
  Star,
  GitFork,
  CircleDot,
  ExternalLink,
  Sparkles,
  Search,
  SlidersHorizontal,
} from "lucide-react";

const repositories = [
  {
    id: 1,
    name: "transformers",
    owner: "huggingface",
    description:
      "State-of-the-art machine learning models for PyTorch, TensorFlow, and JAX with extensive pretrained checkpoints for NLP, vision, and audio.",
    language: "Python",
    stars: "145K",
    forks: "28K",
    topics: ["AI / ML", "PyTorch", "NLP", "LLMs"],
    url: "https://github.com/huggingface/transformers",
  },
  {
    id: 2,
    name: "langchain",
    owner: "langchain-ai",
    description:
      "Context-aware reasoning framework for developing LLM-powered applications, multi-agent workflows, and RAG pipelines.",
    language: "Python",
    stars: "98K",
    forks: "15K",
    topics: ["LLM", "Agents", "RAG", "Python"],
    url: "https://github.com/langchain-ai/langchain",
  },
  {
    id: 3,
    name: "fastapi",
    owner: "tiangolo",
    description:
      "FastAPI framework, high performance, easy to learn, fast to code, ready for production Python backends with OpenAPI support.",
    language: "Python",
    stars: "82K",
    forks: "7.2K",
    topics: ["FastAPI", "Python", "API", "Async"],
    url: "https://github.com/tiangolo/fastapi",
  },
  {
    id: 4,
    name: "react",
    owner: "facebook",
    description:
      "The library for web and native user interfaces. Build component-driven client applications with modern state hooks.",
    language: "JavaScript",
    stars: "235K",
    forks: "48K",
    topics: ["React", "Frontend", "JavaScript", "UI"],
    url: "https://github.com/facebook/react",
  },
];

const GitHub = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const languages = ["All", "Python", "JavaScript", "TypeScript"];

  const filteredRepos = repositories.filter((repo) => {
    const matchesLang =
      selectedLanguage === "All" || repo.language === selectedLanguage;
    const matchesSearch =
      !searchQuery ||
      repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesLang && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#299F95]/10 text-[#299F95]">
            <Code2 size={22} />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#17232A] sm:text-3xl">
              GitHub Repositories & Open Source
            </h1>
            <p className="mt-0.5 text-sm text-[#5F6B70]">
              Explore trending open-source projects, student-friendly repositories, and AI toolkits.
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
            Project & Skill Recommendations
          </h2>
          <p className="mt-0.5 text-xs leading-relaxed text-[#5F6B70]">
            Stunovia discovers open-source codebases matching the frameworks and languages listed in your profile to accelerate your portfolio building.
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
            placeholder="Search repositories by name, topic (e.g. LLM, RAG), or owner..."
            className="w-full rounded-xl border border-[#E8DFD1] bg-[#FAF6EE]/50 py-2.5 pl-10 pr-4 text-sm text-[#17232A] placeholder-[#5F6B70] outline-none transition focus:border-[#299F95] focus:bg-white focus:ring-2 focus:ring-[#299F95]/15"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 border-t border-[#F0E8DC] pt-3">
          <span className="flex items-center gap-1 text-xs font-semibold text-[#5F6B70] mr-1">
            <SlidersHorizontal size={13} />
            Language:
          </span>
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={`rounded-full border px-3.5 py-1 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedLanguage === lang
                  ? "border-[#299F95] bg-[#299F95] text-white shadow-2xs"
                  : "border-[#E8DFD1] bg-white text-[#17232A] hover:border-[#299F95] hover:bg-[#299F95]/5"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* Repositories List */}
      <div className="space-y-4">
        {filteredRepos.map((repo) => (
          <article
            key={repo.id}
            className="group rounded-2xl border border-[#E8DFD1] bg-white p-6 shadow-2xs transition-all duration-200 hover:shadow-md hover:border-[#299F95]/50"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <Code2 size={16} className="text-[#299F95]" />
                  <span className="text-xs font-bold text-[#5F6B70]">
                    {repo.owner}
                  </span>
                  <span className="text-xs text-[#5F6B70]">/</span>
                  <h2 className="text-lg font-bold tracking-tight text-[#17232A] group-hover:text-[#299F95] transition-colors">
                    {repo.name}
                  </h2>
                </div>

                <p className="mt-2 text-xs leading-relaxed text-[#5F6B70]">
                  {repo.description}
                </p>

                {/* Topics */}
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {repo.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-md border border-[#E8DFD1] bg-[#FAF6EE] px-2 py-0.5 text-[11px] font-medium text-[#17232A]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="flex sm:flex-col items-center sm:items-end gap-3 shrink-0">
                <div className="flex items-center gap-3 text-xs font-semibold text-[#5F6B70]">
                  <span className="flex items-center gap-1">
                    <CircleDot size={12} className="text-[#299F95]" />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={13} className="text-[#EAC96B] fill-[#EAC96B]" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={13} className="text-[#5F6B70]" />
                    {repo.forks}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-5 flex items-center justify-between border-t border-[#F0E8DC] pt-4">
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#299F95]">
                <Sparkles size={13} />
                Matches Python & AI Track
              </span>

              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-xl bg-[#299F95] px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-[#22847C]"
              >
                <span>View on GitHub</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default GitHub;