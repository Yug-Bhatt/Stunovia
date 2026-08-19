import StatCard from "../common/StatCard";
import {
  Briefcase,
  Newspaper,
  Bookmark,
  Sparkles,
} from "lucide-react";

const StatsSection = ({ opportunitiesCount = 0, interestsCount = 0 }) => {
  const hasOpportunities = Number(opportunitiesCount) > 0;
  const hasInterests = Number(interestsCount) > 0;

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {/* Card 1: Live Opportunities (Teal Accent) */}
      <StatCard
        title="Live Opportunities"
        value={hasOpportunities ? opportunitiesCount : "0"}
        subtitle={hasOpportunities ? "Real opportunities available" : "Awaiting active postings"}
        meta={hasOpportunities ? "Live Feed" : "0 active"}
        badge={hasOpportunities ? "Active" : "Standby"}
        badgeDot={hasOpportunities}
        icon={Briefcase}
        accentType="teal"
      />

      {/* Card 2: Curated News (Mustard Accent) */}
      <StatCard
        title="Curated News"
        value="3"
        subtitle="Personalized for you"
        meta="Curated"
        badge="Today"
        icon={Newspaper}
        accentType="mustard"
      />

      {/* Card 3: Active Topics (Coral Accent) */}
      <StatCard
        title="Active Topics"
        value={hasInterests ? interestsCount : "0"}
        subtitle="Tracked from your profile"
        meta={hasInterests ? `${interestsCount} focus areas` : "Profile sync"}
        badge="Profile"
        icon={Sparkles}
        accentType="coral"
      />

      {/* Card 4: Saved Resources (Neutral / Teal Accent) */}
      <StatCard
        title="Saved Resources"
        value="0"
        subtitle="Nothing saved yet"
        meta="Bookmark items"
        badge="Library"
        icon={Bookmark}
        accentType="neutral"
      />
    </div>
  );
};

export default StatsSection;