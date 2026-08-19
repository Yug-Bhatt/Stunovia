import { useState } from "react";
import {
  Sparkles,
  Send,
  User,
  Briefcase,
  BookOpen,
  Code2,
  HelpCircle,
  Bot,
  Lightbulb,
} from "lucide-react";

const suggestions = [
  {
    icon: Briefcase,
    text: "What internships fit my Python and ML profile?",
  },
  {
    icon: BookOpen,
    text: "Recommend a roadmap to become an AI Systems Engineer",
  },
  {
    icon: Code2,
    text: "Suggest hands-on portfolio projects for RAG & LLMs",
  },
];

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Hi Yug! I'm your Stunovia AI Intelligence Assistant. I can help analyze your academic profile, evaluate internship skill requirements, suggest open-source projects, and build tailored learning roadmaps for your career goals.",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (textToSend) => {
    const text = typeof textToSend === "string" ? textToSend : inputVal;
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: text.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);

    setTimeout(() => {
      let aiResponseText = "";
      const lower = text.toLowerCase();

      if (lower.includes("internship") || lower.includes("job")) {
        aiResponseText =
          "Based on your profile with Python and Machine Learning skills, I recommend focusing on AI Engineering and MLOps internship postings. Look for roles mentioning FastAPI, PyTorch, and vector databases in our Internships tab.";
      } else if (lower.includes("roadmap") || lower.includes("learn")) {
        aiResponseText =
          "Here is a recommended 3-step focus for this semester:\n1. Deepen Model Serving & Inference Optimization (FastAPI + ONNX/TensorRT)\n2. Build a full-stack RAG pipeline with evaluation benchmarks\n3. Contribute to open-source agent frameworks (check our GitHub tab).";
      } else if (lower.includes("project") || lower.includes("portfolio")) {
        aiResponseText =
          "A high-impact portfolio project would be: 'Local Document Intelligence Engine with Grounded Citations' using LangChain/LlamaIndex, FastAPI, and React with PostgreSQL vector indexing.";
      } else {
        aiResponseText = `I've analyzed your question regarding "${text}". Stunovia's AI intelligence engine will connect this with your verified skills and update your recommended feed accordingly.`;
      }

      const aiMsg = {
        id: Date.now() + 1,
        sender: "ai",
        text: aiResponseText,
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#299F95]/10 text-[#299F95]">
            <Sparkles size={22} />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#17232A] sm:text-3xl">
              AI Student Intelligence Assistant
            </h1>
            <p className="mt-0.5 text-sm text-[#5F6B70]">
              Personalized academic guidance, career recommendations, and skill roadmap planner.
            </p>
          </div>
        </div>
      </div>

      {/* Main Assistant Chat Container */}
      <div className="flex flex-col rounded-2xl border border-[#E8DFD1] bg-white shadow-2xs overflow-hidden min-h-[560px]">
        {/* Assistant Bar */}
        <div className="flex items-center justify-between border-b border-[#F0E8DC] bg-[#FAF6EE]/70 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#299F95] text-white">
              <Sparkles size={17} />
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#17232A]">
                Stunovia Career Advisor
              </h2>
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#299F95]">
                <span className="h-2 w-2 rounded-full bg-[#299F95] animate-pulse"></span>
                <span>Active & Grounded on your Profile</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Stream */}
        <div className="flex-1 space-y-4 p-6 overflow-y-auto max-h-[440px]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "ai" && (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#299F95]/15 text-[#299F95] border border-[#299F95]/30">
                  <Sparkles size={15} />
                </div>
              )}

              <div
                className={`max-w-xl rounded-2xl p-4 text-xs leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-[#299F95] text-white rounded-tr-xs shadow-2xs font-medium"
                    : "border border-[#E8DFD1] bg-[#FAF6EE] text-[#17232A] rounded-tl-xs shadow-2xs"
                }`}
              >
                <p className="whitespace-pre-line">{msg.text}</p>
              </div>

              {msg.sender === "user" && (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#17232A] text-white text-xs font-bold">
                  YB
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs font-semibold text-[#5F6B70] pl-11">
              <span className="inline-block h-2 w-2 rounded-full bg-[#299F95] animate-bounce"></span>
              <span className="inline-block h-2 w-2 rounded-full bg-[#299F95] animate-bounce delay-100"></span>
              <span className="inline-block h-2 w-2 rounded-full bg-[#299F95] animate-bounce delay-200"></span>
              <span className="ml-1 text-[11px]">Stunovia AI is analyzing...</span>
            </div>
          )}
        </div>

        {/* Suggestion Prompts */}
        <div className="border-t border-[#F0E8DC] bg-[#FAF6EE]/50 px-6 py-3.5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#5F6B70] mb-2">
            Suggested Prompts
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion) => {
              const Icon = suggestion.icon;
              return (
                <button
                  key={suggestion.text}
                  onClick={() => handleSend(suggestion.text)}
                  className="flex items-center gap-1.5 rounded-full border border-[#E8DFD1] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#17232A] transition hover:border-[#299F95] hover:bg-[#299F95]/5 cursor-pointer shadow-2xs"
                >
                  <Icon size={13} className="text-[#299F95]" />
                  <span>{suggestion.text}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Input Box */}
        <div className="border-t border-[#F0E8DC] p-4 bg-white">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask about internship skills, project roadmaps, or research topics..."
              className="flex-1 rounded-xl border border-[#E8DFD1] bg-[#FAF6EE]/60 px-4 py-3 text-sm text-[#17232A] placeholder-[#5F6B70] outline-none transition focus:border-[#299F95] focus:bg-white focus:ring-2 focus:ring-[#299F95]/15"
            />
            <button
              type="submit"
              disabled={!inputVal.trim()}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#299F95] text-white shadow-xs transition hover:bg-[#22847C] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shrink-0"
              title="Send Prompt"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;