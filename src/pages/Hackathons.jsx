import {
  Trophy,
  CalendarDays,
  MapPin,
  Users,
  Clock3,
  Sparkles,
} from "lucide-react";

const hackathons = [
  {
    id: 1,
    title: "AI Innovation Challenge 2026",
    organizer: "Tech Innovators",
    mode: "Online",
    date: "Aug 22–24, 2026",
    participants: "2,500+",
    registration: "Open",
    matchScore: 96,
    skills: ["AI / ML", "Python", "Generative AI"],
  },
  {
    id: 2,
    title: "Google Solution Challenge",
    organizer: "Google Developers",
    mode: "Online",
    date: "Sep 05–20, 2026",
    participants: "5,000+",
    registration: "Open",
    matchScore: 91,
    skills: ["Web Development", "Cloud", "AI"],
  },
  {
    id: 3,
    title: "Smart India Hackathon",
    organizer: "Government of India",
    mode: "Hybrid",
    date: "Sep 15–30, 2026",
    participants: "10,000+",
    registration: "Coming Soon",
    matchScore: 88,
    skills: ["Problem Solving", "AI / ML", "Software"],
  },
];

const Hackathons = () => {
  return (
    <div className="text-white">

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <Trophy className="text-orange-400" size={30} />

          <h1 className="text-3xl font-bold">
            Hackathons
          </h1>
        </div>

        <p className="mt-2 text-slate-400">
          Discover hackathons that match your interests and skills.
        </p>
      </div>

      {/* AI Insight */}
      <div className="mb-8 flex items-start gap-4 rounded-2xl border border-orange-500/30 bg-orange-500/10 p-5">

        <Sparkles className="mt-1 text-orange-400" size={22} />

        <div>
          <h2 className="font-semibold">
            AI-Powered Event Matching
          </h2>

          <p className="mt-1 text-sm leading-6 text-slate-400">
            Stunovia analyzes your interests and skills to highlight
            hackathons that are most relevant to your career goals.
          </p>
        </div>

      </div>

      {/* Hackathon Cards */}
      <div className="grid gap-5">

        {hackathons.map((hackathon) => (
          <div
            key={hackathon.id}
            className="rounded-2xl border border-slate-800 bg-[#111827] p-6 transition hover:border-orange-500/50"
          >

            {/* Top */}
            <div className="flex items-start justify-between">

              <div>
                <p className="text-sm font-medium text-orange-400">
                  {hackathon.organizer}
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  {hackathon.title}
                </h2>
              </div>

              {/* Match Score */}
              <div className="rounded-xl bg-orange-500/10 px-5 py-3 text-center">
                <p className="text-xs text-orange-300">
                  Match Score
                </p>

                <p className="text-3xl font-bold text-orange-400">
                  {hackathon.matchScore}%
                </p>
              </div>

            </div>

            {/* Details */}
            <div className="mt-5 flex flex-wrap gap-5 text-sm text-slate-400">

              <span className="flex items-center gap-2">
                <CalendarDays size={16} />
                {hackathon.date}
              </span>

              <span className="flex items-center gap-2">
                <MapPin size={16} />
                {hackathon.mode}
              </span>

              <span className="flex items-center gap-2">
                <Users size={16} />
                {hackathon.participants}
              </span>

              <span className="flex items-center gap-2">
                <Clock3 size={16} />
                {hackathon.registration}
              </span>

            </div>

            {/* Skills */}
            <div className="mt-5 flex flex-wrap gap-2">

              {hackathon.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                >
                  {skill}
                </span>
              ))}

            </div>

            {/* Bottom */}
            <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-5">

              <div className="flex items-center gap-2 text-sm text-green-400">
                <Sparkles size={17} />
                Recommended for you
              </div>

              <button className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-medium transition hover:bg-orange-600">
                View Hackathon
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Hackathons;