import {
  Bot,
  Send,
  Sparkles,
  User,
  Briefcase,
  BookOpen,
  Code2,
} from "lucide-react";

const suggestions = [
  {
    icon: Briefcase,
    text: "Find internships for me",
  },
  {
    icon: BookOpen,
    text: "What should I learn next?",
  },
  {
    icon: Code2,
    text: "Suggest an AI project",
  },
];

const AIAssistant = () => {
  return (
    <div className="text-white">

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3">

          <Bot
            className="text-violet-400"
            size={30}
          />

          <h1 className="text-3xl font-bold">
            AI Career Assistant
          </h1>

        </div>

        <p className="mt-2 text-slate-400">
          Get personalized guidance for your learning and career journey.
        </p>
      </div>

      {/* Assistant Container */}
      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#111827]">

        {/* Status */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/20">
              <Sparkles
                size={20}
                className="text-violet-400"
              />
            </div>

            <div>
              <h2 className="font-semibold">
                Stunovia AI
              </h2>

              <div className="flex items-center gap-2 text-xs text-green-400">
                <span className="h-2 w-2 rounded-full bg-green-400"></span>
                Ready to help
              </div>
            </div>

          </div>

        </div>

        {/* Chat Area */}
        <div className="min-h-[420px] space-y-6 p-6">

          {/* AI Message */}
          <div className="flex gap-4">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-600/20">
              <Bot
                size={18}
                className="text-violet-400"
              />
            </div>

            <div className="max-w-2xl rounded-2xl rounded-tl-none bg-slate-800 px-5 py-4">

              <p className="leading-7 text-slate-200">
                Hi Yug! I'm your Stunovia AI Career Assistant.
                I can help you discover internships, identify
                useful skills, find learning resources, and plan
                your career journey.
              </p>

            </div>

          </div>

          {/* Demo User Message */}
          <div className="flex justify-end gap-4">

            <div className="max-w-xl rounded-2xl rounded-tr-none bg-violet-600 px-5 py-4">

              <p className="leading-7">
                What should I learn to become an AI Engineer?
              </p>

            </div>

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-700">
              <User size={18} />
            </div>

          </div>

          {/* Demo AI Response */}
          <div className="flex gap-4">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-600/20">
              <Bot
                size={18}
                className="text-violet-400"
              />
            </div>

            <div className="max-w-2xl rounded-2xl rounded-tl-none bg-slate-800 px-5 py-4">

              <p className="leading-7 text-slate-200">
                Based on your AI/ML interests, I recommend
                focusing on these areas:
              </p>

              <ul className="mt-3 space-y-2 text-sm text-slate-300">

                <li>
                  • Python and advanced data structures
                </li>

                <li>
                  • Machine Learning fundamentals
                </li>

                <li>
                  • Deep Learning and Neural Networks
                </li>

                <li>
                  • Generative AI and LLMs
                </li>

                <li>
                  • Model deployment and MLOps
                </li>

              </ul>

              <p className="mt-4 text-sm text-violet-300">
                I can also create a personalized learning roadmap
                based on your current skills.
              </p>

            </div>

          </div>

        </div>

        {/* Suggestions */}
        <div className="border-t border-slate-800 px-6 py-4">

          <p className="mb-3 text-xs text-slate-500">
            Try asking
          </p>

          <div className="flex flex-wrap gap-3">

            {suggestions.map((suggestion) => {

              const Icon = suggestion.icon;

              return (
                <button
                  key={suggestion.text}
                  className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-violet-500 hover:text-white"
                >
                  <Icon size={16} />
                  {suggestion.text}
                </button>
              );
            })}

          </div>

        </div>

        {/* Input */}
        <div className="border-t border-slate-800 p-5">

          <div className="flex items-center gap-3">

            <input
              type="text"
              placeholder="Ask Stunovia AI anything..."
              className="flex-1 rounded-xl border border-slate-700 bg-[#0b1220] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-violet-500"
            />

            <button
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 transition hover:bg-violet-700"
              title="Send"
            >
              <Send size={19} />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AIAssistant;