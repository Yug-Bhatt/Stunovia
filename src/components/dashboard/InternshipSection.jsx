import {
  Briefcase,
  MapPin,
  CalendarDays,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const internships = [
  {
    company: "TechNova Labs",
    title: "AI / ML Intern",
    location: "Remote",
    deadline: "Aug 25",
    match: 94,
  },
  {
    company: "DataSphere",
    title: "Data Science Intern",
    location: "Ahmedabad",
    deadline: "Aug 30",
    match: 89,
  },
  {
    company: "CloudCore",
    title: "AI Engineering Intern",
    location: "Bangalore",
    deadline: "Sep 05",
    match: 84,
  },
];

const InternshipSection = () => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#111827] p-5">

      {/* Header */}
      <div className="mb-5 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
            <Briefcase
              size={20}
              className="text-violet-400"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">
              Recommended Internships
            </h2>

            <p className="text-xs text-slate-500">
              Based on your profile
            </p>
          </div>

        </div>

        <button className="text-sm text-violet-400 transition hover:text-violet-300">
          View All
        </button>

      </div>

      {/* Internship List */}
      <div className="space-y-3">

        {internships.map((internship) => (
          <div
            key={internship.title}
            className="rounded-xl border border-slate-800 bg-[#0b1220] p-4 transition hover:border-violet-500/40"
          >

            {/* Company + Match */}
            <div className="flex items-start justify-between gap-3">

              <div className="min-w-0">

                <p className="text-xs font-medium text-violet-400">
                  {internship.company}
                </p>

                <h3 className="mt-1 truncate text-sm font-semibold text-white">
                  {internship.title}
                </h3>

              </div>

              {/* Match Score */}
              <div className="shrink-0 text-right">

                <p className="text-[10px] text-slate-500">
                  Match
                </p>

                <p className="text-lg font-bold text-green-400">
                  {internship.match}%
                </p>

              </div>

            </div>

            {/* Details */}
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">

              <span className="flex items-center gap-1">
                <MapPin size={13} />
                {internship.location}
              </span>

              <span className="flex items-center gap-1">
                <CalendarDays size={13} />
                {internship.deadline}
              </span>

            </div>

          </div>
        ))}

      </div>

      {/* AI Recommendation Note */}
      <div className="mt-4 flex items-start gap-2 rounded-xl bg-violet-500/10 p-3">

        <Sparkles
          size={15}
          className="mt-0.5 shrink-0 text-violet-400"
        />

        <p className="text-xs leading-5 text-slate-400">
          Recommendations are based on your interests, skills,
          and career goals.
        </p>

      </div>

      {/* Bottom Button */}
      <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 py-2.5 text-sm text-slate-300 transition hover:border-violet-500 hover:text-white">

        Explore Internships

        <ArrowRight size={15} />

      </button>

    </div>
  );
};

export default InternshipSection;