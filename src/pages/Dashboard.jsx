import StatCard from "../components/StatCard";

import {
  Newspaper,
  Briefcase,
  Trophy,
  FileText,
  Code2,
  BookOpen,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="text-white">

      {/* Greeting */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Good Evening, Yug! 👋
        </h1>

        <p className="text-slate-400 mt-2 text-lg">
          Here's your personalized tech intelligence for today.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-3 gap-6">

        <StatCard
          title="News"
          value="12"
          icon={<Newspaper size={26} className="text-white" />}
          color="bg-blue-500"
        />

        <StatCard
          title="Internships"
          value="4"
          icon={<Briefcase size={26} className="text-white" />}
          color="bg-green-500"
        />

        <StatCard
          title="Hackathons"
          value="2"
          icon={<Trophy size={26} className="text-white" />}
          color="bg-orange-500"
        />

        <StatCard
          title="Research Papers"
          value="5"
          icon={<FileText size={26} className="text-white" />}
          color="bg-violet-500"
        />

        <StatCard
          title="GitHub Repositories"
          value="3"
          icon={<Code2 size={26} className="text-white" />}
          color="bg-pink-500"
        />

        <StatCard
          title="Free Courses"
          value="2"
          icon={<BookOpen size={26} className="text-white" />}
          color="bg-cyan-500"
        />

      </div>

    </div>
  );
};

export default Dashboard;