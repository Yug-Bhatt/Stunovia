import { useEffect, useState } from "react";
import HeaderSection from "../components/dashboard/HeaderSection";
import StatsSection from "../components/dashboard/StatsSection";
import InterestSection from "../components/dashboard/InterestSection";
import NewsSection from "../components/dashboard/NewsSection";
import InternshipSection from "../components/dashboard/InternshipSection";
import TrendingTopics from "../components/dashboard/TrendingTopics";
import { getStudentProfile } from "../api/profile";
import { getOpportunities } from "../api/opportunities";
import { Loader2, AlertCircle, RefreshCw } from "lucide-react";

const Dashboard = () => {
  const [profile, setProfile] = useState(null);
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadDashboardData = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch student profile
      const profileData = await getStudentProfile(1);
      setProfile(profileData);

      // Fetch real opportunities
      const opportunitiesData = await getOpportunities();
      setOpportunities(Array.isArray(opportunitiesData) ? opportunitiesData : []);
    } catch (err) {
      console.error("Dashboard data fetch error:", err);
      setError(err.message || "Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[500px] flex-col items-center justify-center gap-3">
        <Loader2 className="h-8 w-8 animate-spin text-[#299F95]" />
        <p className="text-sm font-semibold text-[#5F6B70]">
          Loading your student intelligence dashboard...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center p-6 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E96D51]/10 text-[#E96D51] mb-3">
          <AlertCircle size={24} />
        </div>
        <h2 className="text-lg font-bold text-[#17232A]">
          Unable to connect to intelligence server
        </h2>
        <p className="mt-1 max-w-md text-xs text-[#5F6B70]">
          {error}
        </p>
        <button
          onClick={loadDashboardData}
          className="mt-4 flex items-center gap-2 rounded-lg bg-[#299F95] px-4 py-2 text-xs font-semibold text-white shadow-xs transition hover:bg-[#22847C] cursor-pointer"
        >
          <RefreshCw size={14} />
          <span>Retry Connection</span>
        </button>
      </div>
    );
  }

  const studentProfile = profile || {
    name: "Yug Bhatt",
    skills: ["Python", "Machine Learning", "FastAPI", "React"],
    interests: ["AI & ML", "Data Science", "Python", "Cloud Computing"],
    career_goal: "AI Engineer",
    experience_level: "Intermediate",
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Dynamic Header */}
      <HeaderSection profile={studentProfile} />

      {/* Real Statistics Section */}
      <StatsSection
        opportunitiesCount={opportunities.length}
        interestsCount={studentProfile.interests?.length ?? 0}
      />

      {/* Dynamic Interests from Profile */}
      <InterestSection interests={studentProfile.interests} />

      {/* Main Feed & Sidebar Widget Layout */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left 8 Cols: Personalized Tech News */}
        <div className="lg:col-span-8">
          <NewsSection />
        </div>

        {/* Right 4 Cols: Real Recommended Internships + Trending Topics */}
        <div className="space-y-6 lg:col-span-4">
          <InternshipSection opportunities={opportunities} />
          <TrendingTopics />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
