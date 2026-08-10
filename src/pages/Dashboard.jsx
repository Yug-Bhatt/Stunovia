import HeaderSection from "../components/dashboard/HeaderSection";
import StatsSection from "../components/dashboard/StatsSection";
import InterestSection from "../components/dashboard/InterestSection";
import NewsSection from "../components/dashboard/NewsSection";
import InternshipSection from "../components/dashboard/InternshipSection";
import TrendingTopics from "../components/dashboard/TrendingTopics";

const Dashboard = () => {
  return (
    <div className="text-white">

      <HeaderSection />

      <StatsSection />

      <InterestSection />

      <section className="mt-10 grid grid-cols-12 gap-8">

        <NewsSection />

        <div className="col-span-4 space-y-6">

          <InternshipSection />

          <TrendingTopics />

        </div>

      </section>

    </div>
  );
};

export default Dashboard;