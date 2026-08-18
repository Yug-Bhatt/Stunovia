import { useEffect, useState } from "react";

import HeaderSection from "../components/dashboard/HeaderSection";
import StatsSection from "../components/dashboard/StatsSection";
import InterestSection from "../components/dashboard/InterestSection";
import NewsSection from "../components/dashboard/NewsSection";
import InternshipSection from "../components/dashboard/InternshipSection";
import TrendingTopics from "../components/dashboard/TrendingTopics";

import { getStudentProfile } from "../api/profile";
import { getOpportunities } from "../api/opportunities";


const Dashboard = () => {
  const [profile, setProfile] = useState(null);
  const [opportunities, setOpportunities] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const loadDashboardData = async () => {
      try {

        // Fetch student profile
        const profileData = await getStudentProfile(1);

        console.log(
          "Profile received from backend:",
          profileData
        );

        setProfile(profileData);


        // Fetch opportunities
        const opportunitiesData = await getOpportunities();

        console.log(
          "Opportunities received from backend:",
          opportunitiesData
        );

        setOpportunities(opportunitiesData);

      } catch (err) {

        console.error(
          "Dashboard data fetch error:",
          err
        );

        setError(err.message);

      } finally {

        setLoading(false);

      }
    };

    loadDashboardData();

  }, []);


  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center text-slate-400">
        Loading your dashboard...
      </div>
    );
  }


  if (error) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center">

        <p className="text-lg text-red-400">
          Unable to load your dashboard.
        </p>

        <p className="mt-2 text-sm text-slate-500">
          {error}
        </p>

      </div>
    );
  }


  if (!profile) {
    return (
      <div className="flex min-h-[400px] items-center justify-center text-slate-400">
        No profile found.
      </div>
    );
  }


  return (
    <div className="text-white">

      {/* Dynamic Header */}
      <HeaderSection profile={profile} />


      {/* Statistics */}
      <StatsSection />


      {/* Dynamic Interests */}
      <InterestSection interests={profile.interests} />


      {/* Feed Layout */}
      <section className="mt-10 grid grid-cols-12 gap-8">

        <NewsSection />

        <div className="col-span-4 space-y-6">

          <InternshipSection
            opportunities={opportunities}
          />

          <TrendingTopics />

        </div>

      </section>

    </div>
  );
};


export default Dashboard;
