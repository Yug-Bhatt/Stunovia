import { TrendingUp } from "lucide-react";
import GradualBlur from "../common/GradualBlur";

const topics = [
  {
    rank: 1,
    name: "Generative AI & LLM Systems",
    description: "Agent architectures, RAG, and reasoning frameworks",
  },
  {
    rank: 2,
    name: "Autonomous AI Agents",
    description: "Multi-agent workflows, tool use, and memory",
  },
  {
    rank: 3,
    name: "MLOps & Model Evaluation",
    description: "Deployment, monitoring, and pipeline latency",
  },
  {
    rank: 4,
    name: "Fullstack AI Applications",
    description: "Next.js, FastAPI, vector search, and client UI",
  },
];

const TrendingTopics = () => {
  return (
    <div className="relative rounded-2xl glass-card p-6 overflow-hidden">
      {/* Section Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E8DFD1] bg-[#FAF6EE]/80 text-[#5F6B70]">
            <TrendingUp size={18} />
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight text-[#17232A]">
              Trending in Tech & AI
            </h2>
          </div>
        </div>
      </div>

      {/* Topics List */}
      <div className="relative space-y-2">
        {topics.map((topic) => (
          <div
            key={topic.rank}
            className="group flex items-start gap-3 rounded-lg border border-transparent p-2.5 transition-all duration-200 hover:border-[#E8DFD1] hover:bg-[#FAF6EE]"
          >
            {/* Rank Badge */}
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#E8DFD1] bg-[#FAF6EE] text-xs font-semibold text-[#17232A]">
              #{topic.rank}
            </div>

            {/* Topic Details */}
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-xs font-bold text-[#17232A] group-hover:text-[#299F95] transition-colors">
                {topic.name}
              </h3>
              <p className="mt-0.5 truncate text-[11px] text-[#5F6B70]">
                {topic.description}
              </p>
            </div>
          </div>
        ))}
        <GradualBlur
          position="bottom"
          height="1.5rem"
          strength={1.2}
          divCount={3}
          opacity={0.7}
        />
      </div>
    </div>
  );
};

export default TrendingTopics;