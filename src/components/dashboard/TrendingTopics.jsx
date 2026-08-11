import {
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  Hash,
} from "lucide-react";

const topics = [
  {
    name: "Generative AI",
    description: "LLMs, AI tools and applications",
    mentions: "12.4K",
  },
  {
    name: "AI Agents",
    description: "Autonomous AI systems",
    mentions: "8.7K",
  },
  {
    name: "Machine Learning",
    description: "New models and techniques",
    mentions: "6.9K",
  },
  {
    name: "MLOps",
    description: "Deployment and model monitoring",
    mentions: "4.8K",
  },
];

const TrendingTopics = () => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#111827] p-5">

      {/* Header */}
      <div className="mb-5 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
            <TrendingUp
              size={20}
              className="text-blue-400"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">
              Trending Topics
            </h2>

            <p className="text-xs text-slate-500">
              Popular in tech
            </p>
          </div>

        </div>

        <button className="text-sm text-blue-400 transition hover:text-blue-300">
          View All
        </button>

      </div>

      {/* Topics */}
      <div className="space-y-1">

        {topics.map((topic, index) => (
          <div
            key={topic.name}
            className="group flex items-center gap-3 rounded-xl p-3 transition hover:bg-slate-800/60"
          >

            {/* Number */}
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-xs font-semibold text-slate-400">
              {index + 1}
            </div>

            {/* Topic */}
            <div className="min-w-0 flex-1">

              <div className="flex items-center gap-2">

                <Hash
                  size={13}
                  className="text-blue-400"
                />

                <h3 className="truncate text-sm font-semibold text-white">
                  {topic.name}
                </h3>

              </div>

              <p className="mt-1 truncate text-xs text-slate-500">
                {topic.description}
              </p>

            </div>

            {/* Mentions */}
            <div className="shrink-0 text-right">

              <div className="flex items-center gap-1 text-xs text-green-400">
                <ArrowUpRight size={13} />
                {topic.mentions}
              </div>

              <p className="text-[10px] text-slate-600">
                mentions
              </p>

            </div>

          </div>
        ))}

      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center gap-2 rounded-xl bg-blue-500/10 p-3">

        <Sparkles
          size={15}
          className="shrink-0 text-blue-400"
        />

        <p className="text-xs leading-5 text-slate-400">
          Trending topics will be personalized using your interests.
        </p>

      </div>

    </div>
  );
};

export default TrendingTopics;