import {
  Briefcase,
  MapPin,
  Clock3,
  ShieldCheck,
  Users,
  Sparkles,
} from "lucide-react";

const internships = [
  {
    id: 1,
    company: "TechNova Labs",
    title: "AI / Machine Learning Intern",
    location: "Remote",
    duration: "3 Months",
    matchScore: 94,
    trustScore: 96,
    communityScore: 91,
    skills: ["Python", "Machine Learning", "Pandas"],
    deadline: "Aug 25, 2026",
  },
  {
    id: 2,
    company: "DataSphere",
    title: "Data Science Intern",
    location: "Ahmedabad, India",
    duration: "6 Months",
    matchScore: 88,
    trustScore: 92,
    communityScore: 86,
    skills: ["Python", "SQL", "Data Analysis"],
    deadline: "Sep 02, 2026",
  },
  {
    id: 3,
    company: "CloudCore",
    title: "AI Engineering Intern",
    location: "Bangalore, India",
    duration: "4 Months",
    matchScore: 82,
    trustScore: 89,
    communityScore: 84,
    skills: ["Python", "AWS", "Deep Learning"],
    deadline: "Sep 10, 2026",
  },
];

const Score = ({ label, value, icon: Icon }) => {
  return (
    <div className="rounded-xl border border-slate-800 bg-[#0b1220] p-4">
      <div className="flex items-center gap-2 text-sm text-slate-400">
        <Icon size={16} />
        {label}
      </div>

      <p className="mt-2 text-2xl font-bold text-white">
        {value}%
      </p>
    </div>
  );
};

const Internships = () => {
  return (
    <div className="text-white">

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <Briefcase className="text-violet-400" size={30} />

          <h1 className="text-3xl font-bold">
            Internships
          </h1>
        </div>

        <p className="mt-2 text-slate-400">
          Discover internships matched to your skills and career goals.
        </p>
      </div>

      {/* AI Insight */}
      <div className="mb-8 flex items-start gap-4 rounded-2xl border border-violet-500/30 bg-violet-500/10 p-5">

        <Sparkles className="mt-1 text-violet-400" size={22} />

        <div>
          <h2 className="font-semibold">
            AI Opportunity Intelligence
          </h2>

          <p className="mt-1 text-sm leading-6 text-slate-400">
            Stunovia analyzes opportunity relevance, authenticity,
            and community feedback to help students make safer
            career decisions.
          </p>
        </div>

      </div>

      {/* Internship Cards */}
      <div className="space-y-5">

        {internships.map((internship) => (
          <div
            key={internship.id}
            className="rounded-2xl border border-slate-800 bg-[#111827] p-6 transition hover:border-violet-500/50"
          >

            {/* Top */}
            <div className="flex items-start justify-between">

              <div>
                <p className="text-sm font-medium text-violet-400">
                  {internship.company}
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  {internship.title}
                </h2>

                <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-400">

                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    {internship.location}
                  </span>

                  <span className="flex items-center gap-2">
                    <Clock3 size={16} />
                    {internship.duration}
                  </span>

                  <span>
                    Deadline: {internship.deadline}
                  </span>

                </div>
              </div>

              {/* Match Score */}
              <div className="rounded-xl bg-violet-600/20 px-5 py-3 text-center">
                <p className="text-xs text-violet-300">
                  Match Score
                </p>

                <p className="text-3xl font-bold text-violet-400">
                  {internship.matchScore}%
                </p>
              </div>

            </div>

            {/* Skills */}
            <div className="mt-5 flex flex-wrap gap-2">

              {internship.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                >
                  {skill}
                </span>
              ))}

            </div>

            {/* Scores */}
            <div className="mt-6 grid grid-cols-3 gap-4">

              <Score
                label="Trust Score"
                value={internship.trustScore}
                icon={ShieldCheck}
              />

              <Score
                label="Community Score"
                value={internship.communityScore}
                icon={Users}
              />

              <Score
                label="AI Match"
                value={internship.matchScore}
                icon={Sparkles}
              />

            </div>

            {/* Verification */}
            <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-5">

              <div className="flex items-center gap-2 text-sm text-green-400">
                <ShieldCheck size={18} />
                Demo verification completed
              </div>

              <button className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-medium transition hover:bg-violet-700">
                View Opportunity
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Internships;