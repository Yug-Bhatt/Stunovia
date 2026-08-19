import { useState } from "react";
import {
  BookOpen,
  Clock3,
  ExternalLink,
  Sparkles,
  PlayCircle,
  BarChart3,
  Search,
  SlidersHorizontal,
} from "lucide-react";

const coursesList = [
  {
    id: 1,
    title: "Machine Learning Specialization",
    platform: "DeepLearning.AI / Coursera",
    level: "Beginner",
    duration: "3 Months",
    category: "AI & ML",
    progress: 0,
    description:
      "Master foundational machine learning concepts, supervised learning, neural network algorithms, decision trees, and best development practices.",
    url: "https://www.coursera.org",
  },
  {
    id: 2,
    title: "Python for Data Science & Engineering",
    platform: "freeCodeCamp",
    level: "Beginner",
    duration: "6 Hours",
    category: "Data Science",
    progress: 35,
    description:
      "Build a robust programming foundation with NumPy, Pandas, visualization libraries, and scientific computation in Python.",
    url: "https://www.freecodecamp.org",
  },
  {
    id: 3,
    title: "Introduction to Generative AI & LLMs",
    platform: "Google Cloud Training",
    level: "Intermediate",
    duration: "8 Hours",
    category: "Generative AI",
    progress: 0,
    description:
      "Understand the mechanics of large language models, prompt engineering, fine-tuning strategies, and responsible AI deployment.",
    url: "https://cloud.google.com/training",
  },
];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "AI & ML", "Data Science", "Generative AI"];

  const filteredCourses = coursesList.filter((course) => {
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.platform.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#299F95]/10 text-[#299F95]">
            <BookOpen size={22} />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#17232A] sm:text-3xl">
              Courses & Learning Roadmaps
            </h1>
            <p className="mt-0.5 text-sm text-[#5F6B70]">
              Curated coursework and tutorials aligned with your engineering career target.
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
            Curriculum Intelligence
          </h2>
          <p className="mt-0.5 text-xs leading-relaxed text-[#5F6B70]">
            Stunovia evaluates required industry job skills against your student profile to identify skill gaps and suggest targeted high-yield courses.
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
            placeholder="Search courses by title, topic, or platform..."
            className="w-full rounded-xl border border-[#E8DFD1] bg-[#FAF6EE]/50 py-2.5 pl-10 pr-4 text-sm text-[#17232A] placeholder-[#5F6B70] outline-none transition focus:border-[#299F95] focus:bg-white focus:ring-2 focus:ring-[#299F95]/15"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 border-t border-[#F0E8DC] pt-3">
          <span className="flex items-center gap-1 text-xs font-semibold text-[#5F6B70] mr-1">
            <SlidersHorizontal size={13} />
            Topic:
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

      {/* Course Cards */}
      <div className="space-y-4">
        {filteredCourses.map((course) => (
          <article
            key={course.id}
            className="group rounded-2xl border border-[#E8DFD1] bg-white p-6 shadow-2xs transition-all duration-200 hover:shadow-md hover:border-[#299F95]/50"
          >
            {/* Top */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#299F95]/10 px-3 py-0.5 text-xs font-semibold text-[#299F95]">
                    {course.category}
                  </span>
                  <span className="rounded-md border border-[#E8DFD1] bg-[#FAF6EE] px-2 py-0.5 text-[11px] font-medium text-[#5F6B70]">
                    {course.level}
                  </span>
                </div>

                <h2 className="mt-2 text-xl font-bold tracking-tight text-[#17232A] group-hover:text-[#299F95] transition-colors">
                  {course.title}
                </h2>

                <p className="mt-1 text-xs font-semibold text-[#5F6B70]">
                  {course.platform}
                </p>

                <p className="mt-3 text-xs leading-relaxed text-[#5F6B70]">
                  {course.description}
                </p>

                {/* Details */}
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#5F6B70]">
                  <span className="flex items-center gap-1.5">
                    <Clock3 size={14} className="text-[#299F95]" />
                    <span>{course.duration}</span>
                  </span>

                  <span className="flex items-center gap-1.5">
                    <BarChart3 size={14} className="text-[#B88B22]" />
                    <span>Level: {course.level}</span>
                  </span>
                </div>

                {/* Progress bar if ongoing */}
                {course.progress > 0 && (
                  <div className="mt-4 max-w-xs">
                    <div className="flex justify-between text-xs font-semibold text-[#5F6B70] mb-1">
                      <span>Your Progress</span>
                      <span className="text-[#299F95]">{course.progress}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-[#FAF6EE] border border-[#E8DFD1]">
                      <div
                        className="h-full rounded-full bg-[#299F95]"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Relevance Score (Honest Coming Soon) */}
              <div className="flex sm:flex-col items-center justify-between sm:justify-center rounded-xl border border-[#E8DFD1] bg-[#FAF6EE] px-4 py-2.5 text-center shrink-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#5F6B70]">
                  Career Match
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
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#299F95]">
                <Sparkles size={13} />
                Recommended for AI Specialization
              </span>

              <a
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-xl bg-[#299F95] px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-[#22847C]"
              >
                <PlayCircle size={14} />
                <span>Start Learning</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Courses;