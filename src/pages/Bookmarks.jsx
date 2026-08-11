import {
  Bookmark,
  Newspaper,
  Briefcase,
  Trophy,
  FileText,
  Clock3,
  ExternalLink,
} from "lucide-react";

const bookmarks = [
  {
    id: 1,
    type: "News",
    icon: Newspaper,
    title: "OpenAI introduces major improvements in AI reasoning",
    description:
      "Latest developments in AI models, reasoning capabilities, and developer tools.",
    source: "OpenAI",
    time: "5 min read",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    id: 2,
    type: "Internship",
    icon: Briefcase,
    title: "AI / Machine Learning Intern",
    description:
      "Remote internship opportunity focused on Python, machine learning, and data science.",
    source: "TechNova Labs",
    time: "Deadline Aug 25",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    id: 3,
    type: "Hackathon",
    icon: Trophy,
    title: "AI Innovation Challenge 2026",
    description:
      "Build innovative AI solutions and compete with developers from around the world.",
    source: "Tech Innovators",
    time: "Aug 22–24",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    id: 4,
    type: "Research Paper",
    icon: FileText,
    title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP",
    description:
      "Research exploring how external knowledge retrieval improves language model responses.",
    source: "Research Archive",
    time: "10 min read",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
];

const Bookmarks = () => {
  return (
    <div className="text-white">

      {/* Header */}
      <div className="mb-8">

        <div className="flex items-center gap-3">

          <Bookmark
            className="text-yellow-400"
            size={30}
          />

          <h1 className="text-3xl font-bold">
            Bookmarks
          </h1>

        </div>

        <p className="mt-2 text-slate-400">
          Your saved news, opportunities, hackathons, and research.
        </p>

      </div>

      {/* Bookmark Stats */}
      <div className="mb-8 grid grid-cols-4 gap-5">

        <div className="rounded-2xl border border-slate-800 bg-[#111827] p-5">
          <p className="text-sm text-slate-400">
            Total Saved
          </p>

          <p className="mt-2 text-3xl font-bold">
            12
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-[#111827] p-5">
          <p className="text-sm text-slate-400">
            News
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-400">
            5
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-[#111827] p-5">
          <p className="text-sm text-slate-400">
            Opportunities
          </p>

          <p className="mt-2 text-3xl font-bold text-green-400">
            4
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-[#111827] p-5">
          <p className="text-sm text-slate-400">
            Research
          </p>

          <p className="mt-2 text-3xl font-bold text-violet-400">
            3
          </p>
        </div>

      </div>

      {/* Saved Items */}
      <div className="space-y-5">

        {bookmarks.map((item) => {

          const Icon = item.icon;

          return (
            <article
              key={item.id}
              className="rounded-2xl border border-slate-800 bg-[#111827] p-6 transition hover:border-yellow-500/40"
            >

              <div className="flex items-start gap-5">

                {/* Icon */}
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.bg}`}
                >
                  <Icon
                    size={22}
                    className={item.color}
                  />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">

                  <div className="flex items-center gap-3">

                    <span
                      className={`text-sm font-medium ${item.color}`}
                    >
                      {item.type}
                    </span>

                    <span className="text-slate-600">
                      •
                    </span>

                    <span className="text-sm text-slate-500">
                      {item.source}
                    </span>

                  </div>

                  <h2 className="mt-2 text-xl font-semibold">
                    {item.title}
                  </h2>

                  <p className="mt-2 leading-6 text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                    <Clock3 size={15} />
                    {item.time}
                  </div>

                </div>

                {/* Actions */}
                <div className="flex shrink-0 items-center gap-2">

                  <button
                    className="rounded-xl border border-slate-700 p-2.5 text-yellow-400 transition hover:border-yellow-500"
                    title="Remove Bookmark"
                  >
                    <Bookmark size={18} />
                  </button>

                  <button
                    className="rounded-xl border border-slate-700 p-2.5 text-slate-400 transition hover:border-violet-500 hover:text-violet-400"
                    title="Open"
                  >
                    <ExternalLink size={18} />
                  </button>

                </div>

              </div>

            </article>
          );
        })}

      </div>

    </div>
  );
};

export default Bookmarks;