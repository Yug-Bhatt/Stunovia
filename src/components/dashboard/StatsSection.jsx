import StatCard from "../common/StatCard";
import {
  Briefcase,
  Newspaper,
  Bookmark,
  Sparkles,
} from "lucide-react";

const StatsSection = ({ opportunitiesCount = 0, interestsCount = 0 }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Live Opportunities"
        value={opportunitiesCount > 0 ? opportunitiesCount : "0"}
        label={opportunitiesCount > 0 ? `${opportunitiesCount} active postings` : "No active postings"}
        icon={Briefcase}
        isHero={true}
      />

      <StatCard
        title="Curated News"
        value="3"
        label="Updated today"
        icon={Newspaper}
      />

      <StatCard
        title="Active Topics"
        value={interestsCount > 0 ? interestsCount : "0"}
        label="Tracked from profile"
        icon={Sparkles}
      />

      <StatCard
        title="Saved Resources"
        value="0"
        label="Nothing saved yet"
        icon={Bookmark}
      />
    </div>
  );
};

export default StatsSection;