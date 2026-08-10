import StatCard from "../common/StatCard";

import {
  Newspaper,
  Briefcase,
  Trophy,
  FileText,
  Code2,
  BookOpen,
} from "lucide-react";

const StatsSection = () => {
  return (
    <div className="grid grid-cols-6 gap-5">

      <StatCard
        title="News"
        value="12"
        icon={<Newspaper size={22} className="text-white" />}
        color="bg-blue-500"
      />

      <StatCard
        title="Internships"
        value="4"
        icon={<Briefcase size={22} className="text-white" />}
        color="bg-green-500"
      />

      <StatCard
        title="Hackathons"
        value="2"
        icon={<Trophy size={22} className="text-white" />}
        color="bg-orange-500"
      />

      <StatCard
        title="Research Papers"
        value="5"
        icon={<FileText size={22} className="text-white" />}
        color="bg-violet-500"
      />

      <StatCard
        title="GitHub Repos"
        value="3"
        icon={<Code2 size={22} className="text-white" />}
        color="bg-pink-500"
      />

      <StatCard
        title="Courses"
        value="2"
        icon={<BookOpen size={22} className="text-white" />}
        color="bg-cyan-500"
      />

    </div>
  );
};

export default StatsSection;