import NewsCard from "./NewsCard";

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
    source: "OpenAI",
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
    trending: true,
    title: "New AI research pushes the boundaries of mathematical reasoning",
    description:
      "Researchers are developing new AI systems capable of solving increasingly complex mathematical and reasoning problems.",
    source: "arXiv",
    readTime: 6,
  },
];

const NewsSection = () => {
  return (
    <div className="col-span-8">

      {/* Section Header */}
      <div className="mb-5 flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold">
            Personalized News
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Latest technology news based on your interests.
          </p>
        </div>

        <button className="text-sm font-medium text-violet-400 transition hover:text-violet-300">
          See All
        </button>

      </div>

      {/* News Cards */}
      <div className="space-y-6">

        {newsData.map((news) => (
          <NewsCard
            key={news.id}
            news={news}
          />
        ))}

      </div>

    </div>
  );
};

export default NewsSection;