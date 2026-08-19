import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeaderSection = ({ profile }) => {
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) {
      return "Good Morning";
    } else if (hour < 17) {
      return "Good Afternoon";
    } else if (hour < 21) {
      return "Good Evening";
    } else {
      return "Good Night";
    }
  };

  const displayName = profile?.name || "Student";
  const firstName = displayName.split(" ")[0];

  const currentDate = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  return (
    <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-[#5F6B70]">
          {currentDate}
        </p>

        <h1 className="mt-1.5 text-3xl font-bold tracking-tight text-[#17232A]">
          {getGreeting()}, {firstName}
        </h1>

        <p className="mt-1 text-sm text-[#5F6B70]">
          Your personalized technology intelligence and verified career opportunities for today.
        </p>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <Link
          to="/internships"
          className="flex items-center gap-2 rounded-lg bg-[#299F95] px-4 py-2.5 text-sm font-semibold text-white shadow-xs transition hover:bg-[#22847C]"
        >
          <span>Explore Opportunities</span>
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default HeaderSection;