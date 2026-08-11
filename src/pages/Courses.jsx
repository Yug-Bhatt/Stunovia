import {
  BookOpen,
  Clock3,
  ExternalLink,
  Sparkles,
  PlayCircle,
  BarChart3,
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Machine Learning Specialization",
    platform: "Coursera",
    level: "Beginner",
    duration: "3 Months",
    category: "AI & ML",
    progress: 0,
    relevance: 96,
    description:
      "Learn the fundamentals of machine learning, supervised learning, neural networks, and practical ML development.",
  },
  {
    id: 2,
    title: "Python for Data Science",
    platform: "freeCodeCamp",
    level: "Beginner",
    duration: "6 Hours",
    category: "Data Science",
    progress: 35,
    relevance: 93,
    description:
      "Build a strong Python foundation for data analysis, visualization, and machine learning applications.",
  },
  {
    id: 3,
    title: "Introduction to Generative AI",
    platform: "Google",
    level: "Intermediate",
    duration: "8 Hours",
    category: "Generative AI",
    progress: 0,
    relevance: 89,
    description:
      "Understand the fundamentals of generative AI, large language models, and modern AI applications.",
  },
];

const Courses = () => {
  return (
    <div className="text-white">

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <BookOpen className="text-cyan-400" size={30} />

          <h1 className="text-3xl font-bold">
            Courses
          </h1>
        </div>

        <p className="mt-2 text-slate-400">
          Discover learning resources personalized to your career goals.
        </p>
      </div>

      {/* AI Recommendation Banner */}
      <div className="mb-8 flex items-start gap-4 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-5">

        <Sparkles className="mt-1 text-cyan-400" size={22} />

        <div>
          <h2 className="font-semibold">
            AI Learning Recommendations
          </h2>

          <p className="mt-1 text-sm leading-6 text-slate-400">
            Stunovia recommends courses based on your interests,
            skills, career goals, and identified skill gaps.
          </p>
        </div>

      </div>

      {/* Course Cards */}
      <div className="grid gap-5">

        {courses.map((course) => (
          <article
            key={course.id}
            className="rounded-2xl border border-slate-800 bg-[#111827] p-6 transition hover:border-cyan-500/50"
          >

            {/* Top */}
            <div className="flex items-start justify-between gap-6">

              <div className="flex-1">

                <div className="flex flex-wrap items-center gap-2">

                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                    {course.category}
                  </span>

                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">
                    {course.level}
                  </span>

                </div>

                <h2 className="mt-3 text-2xl font-bold">
                  {course.title}
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  {course.platform}
                </p>

              </div>

              {/* Relevance */}
              <div className="rounded-xl bg-cyan-500/10 px-5 py-3 text-center">

                <p className="text-xs text-cyan-300">
                  Relevance
                </p>

                <p className="text-3xl font-bold text-cyan-400">
                  {course.relevance}%
                </p>

              </div>

            </div>

            {/* Description */}
            <p className="mt-5 leading-7 text-slate-400">
              {course.description}
            </p>

            {/* Details */}
            <div className="mt-5 flex flex-wrap gap-5 text-sm text-slate-400">

              <span className="flex items-center gap-2">
                <Clock3 size={16} />
                {course.duration}
              </span>

              <span className="flex items-center gap-2">
                <BarChart3 size={16} />
                {course.level}
              </span>

            </div>

            {/* Progress */}
            {course.progress > 0 && (
              <div className="mt-6">

                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-400">
                    Your Progress
                  </span>

                  <span className="text-cyan-400">
                    {course.progress}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-800">

                  <div
                    className="h-full rounded-full bg-cyan-500"
                    style={{ width: `${course.progress}%` }}
                  />

                </div>

              </div>
            )}

            {/* Bottom */}
            <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-5">

              <div className="flex items-center gap-2 text-sm text-cyan-400">
                <Sparkles size={17} />
                Recommended for you
              </div>

              <button className="flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-2.5 text-sm font-medium transition hover:bg-cyan-700">

                <PlayCircle size={17} />

                Start Learning

                <ExternalLink size={16} />

              </button>

            </div>

          </article>
        ))}

      </div>

    </div>
  );
};

export default Courses;