import {
  Code2,
  Star,
  GitFork,
  CircleDot,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const repositories = [
  {
    id: 1,
    name: "transformers",
    owner: "huggingface",
    description:
      "State-of-the-art machine learning models for text, vision, audio, and multimodal applications.",
    language: "Python",
    stars: "145K",
    forks: "28K",
    topics: ["AI", "Machine Learning", "NLP"],
  },
  {
    id: 2,
    name: "langchain",
    owner: "langchain-ai",
    description:
      "Framework for developing applications powered by language models and AI agents.",
    language: "Python",
    stars: "98K",
    forks: "15K",
    topics: ["LLM", "AI Agents", "RAG"],
  },
  {
    id: 3,
    name: "react",
    owner: "facebook",
    description:
      "A JavaScript library for building user interfaces and interactive web applications.",
    language: "JavaScript",
    stars: "235K",
    forks: "48K",
    topics: ["React", "Frontend", "JavaScript"],
  },
];

const GitHub = () => {
  return (
    <div className="text-white">

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <Code2 className="text-pink-400" size={30} />

          <h1 className="text-3xl font-bold">
            GitHub
          </h1>
        </div>

        <p className="mt-2 text-slate-400">
          Discover repositories and open-source projects relevant to your interests.
        </p>
      </div>

      {/* AI Recommendation Banner */}
      <div className="mb-8 flex items-start gap-4 rounded-2xl border border-pink-500/30 bg-pink-500/10 p-5">

        <Sparkles className="mt-1 text-pink-400" size={22} />

        <div>
          <h2 className="font-semibold">
            AI-Powered Repository Recommendations
          </h2>

          <p className="mt-1 text-sm leading-6 text-slate-400">
            Stunovia can recommend repositories based on your skills,
            interests, and technologies you want to learn.
          </p>
        </div>

      </div>

      {/* Repository List */}
      <div className="space-y-5">

        {repositories.map((repo) => (
          <article
            key={repo.id}
            className="rounded-2xl border border-slate-800 bg-[#111827] p-6 transition hover:border-pink-500/50"
          >

            {/* Repository Header */}
            <div className="flex items-start justify-between gap-6">

              <div className="flex-1">

                <div className="flex items-center gap-2">

                  <Code2 size={18} className="text-pink-400" />

                  <h2 className="text-2xl font-bold">
                    {repo.owner}/{repo.name}
                  </h2>

                </div>

                <p className="mt-3 leading-7 text-slate-400">
                  {repo.description}
                </p>

              </div>

              <span className="rounded-full bg-pink-500/10 px-4 py-2 text-sm font-medium text-pink-300">
                Recommended
              </span>

            </div>

            {/* Topics */}
            <div className="mt-5 flex flex-wrap gap-2">

              {repo.topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                >
                  {topic}
                </span>
              ))}

            </div>

            {/* Repository Stats */}
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-400">

              <span className="flex items-center gap-2">
                <CircleDot size={16} />
                {repo.language}
              </span>

              <span className="flex items-center gap-2">
                <Star size={16} />
                {repo.stars}
              </span>

              <span className="flex items-center gap-2">
                <GitFork size={16} />
                {repo.forks}
              </span>

            </div>

            {/* Bottom */}
            <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-5">

              <div className="flex items-center gap-2 text-sm text-pink-400">
                <Sparkles size={17} />
                Matches your interests
              </div>

              <button className="flex items-center gap-2 rounded-xl bg-pink-600 px-5 py-2.5 text-sm font-medium transition hover:bg-pink-700">
                View Repository
                <ExternalLink size={17} />
              </button>

            </div>

          </article>
        ))}

      </div>

    </div>
  );
};

export default GitHub;