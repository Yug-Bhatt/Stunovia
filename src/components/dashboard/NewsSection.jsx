import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";
import { Newspaper, ArrowRight } from "lucide-react";

const newsData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    category: "AI & ML",
    trending: true,
    title: "OpenAI launches GPT-5.5 with major reasoning improvements",
    description:
      "OpenAI introduced GPT-5.5 featuring improved reasoning, coding capabilities, and lower latency for developers.",
    source: "OpenAI Blog",
    readTime: 5,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200",
    category: "Web Development",
    trending: false,
    title: "AI-powered development is changing how software is built",
    description:
      "Developers are increasingly using AI coding assistants to build, test, and maintain applications faster.",
    source: "TechCrunch",
    readTime: 7,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200",
    category: "Research",
    trending: false,
    title: "New AI research pushes the boundaries of mathematical reasoning",
    description:
      "Researchers are developing new AI systems capable of solving increasingly complex mathematical and reasoning problems.",
    source: "arXiv",
    readTime: 6,
  },
];

const NewsSection = () => {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E8DFD1] bg-[#FAF6EE] text-[#5F6B70]">
            <Newspaper size={18} />
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight text-[#17232A]">
              Personalized News & Insights
            </h2>
            <p className="text-xs text-[#5F6B70]">
              Curated technical developments aligned with your profile
            </p>
          </div>
        </div>

        <Link
          to="/feed"
          className="group flex items-center gap-1 text-xs font-semibold text-[#299F95] transition hover:text-[#22847C]"
        >
          <span>View All</span>
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* News Cards */}
      <div className="space-y-6">
        {newsData.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;