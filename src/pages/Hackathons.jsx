import { useState } from "react";
import {
  Trophy,
  CalendarDays,
  MapPin,
  Users,
  Clock3,
  Sparkles,
  ExternalLink,
  Search,
  SlidersHorizontal,
} from "lucide-react";

const hackathonsList = [
  {
    id: 1,
    title: "AI Innovation Challenge 2026",
    organizer: "Tech Innovators Foundation",
    mode: "Online",
    date: "Aug 22–24, 2026",
    participants: "2,500+ registered",
    registration: "Registration Open",
    prize: "$15,000 in prizes",
    skills: ["AI / ML", "Python", "Generative AI", "FastAPI"],
    description: "Build cutting-edge AI agents and full-stack solutions to address education and productivity challenges.",
  },
  {
    id: 2,
    title: "Global Student Solution Challenge",
    organizer: "Developer Ecosystem Network",
    mode: "Online",
    date: "Sep 05–20, 2026",
    participants: "5,000+ registered",
    registration: "Registration Open",
    prize: "$25,000 in prizes",
    skills: ["Web Development", "Cloud Computing", "AI"],
    description: "Create scalable technological solutions supporting the UN Sustainable Development Goals.",
  },
  {
    id: 3,
    title: "National Smart Tech Hackathon",
    organizer: "GovTech Initiative",
    mode: "Hybrid",
    date: "Sep 15–30, 2026",
    participants: "10,000+ registered",
    registration: "Announcing Soon",
    prize: "Grant funding & Mentorship",
    skills: ["Problem Solving", "AI / ML", "Software Engineering"],
    description: "Nationwide problem-solving hackathon tackling real-world civic, industrial, and healthcare bottlenecks.",
  },
];

const Hackathons = () => {
  const [selectedMode, setSelectedMode] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const modes = ["All", "Online", "Hybrid", "In-Person"];

  const filteredHackathons = hackathonsList.filter((item) => {
    const matchesMode = selectedMode === "All" || item.mode.toLowerCase() === selectedMode.toLowerCase();
    const matchesSearch =
      !searchQuery ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.organizer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesMode && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAC96B]/25 text-[#B88B22]">
            <Trophy size={22} />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#17232A] sm:text-3xl">
              Hackathons & Competitions
            </h1>
            <p className="mt-0.5 text-sm text-[#5F6B70]">
              Discover student hackathons, open challenges, and team competitions.
            </p>
          </div>
        </div>
      </div>

      {/* AI Insight */}
      <div className="flex flex-col sm:flex-row items-start gap-3.5 rounded-2xl border border-[#EAC96B]/50 bg-[#FFF3DC]/90 p-5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EAC96B] text-[#17232A]">
          <Sparkles size={17} />
        </div>
        <div>
          <h2 className="text-sm font-bold text-[#17232A]">
            AI Event Matching
          </h2>
          <p className="mt-0.5 text-xs leading-relaxed text-[#5F6B70]">
            Stunovia matches hackathon tracks with your student skill profile. Personalized fit predictions will be generated dynamically based on your registered skills.
          </p>
        </div>
      </div>

      {/* Filter & Search */}
      <div className="rounded-2xl border border-[#E8DFD1] bg-white p-4 shadow-2xs space-y-3.5">
        <div className="relative">
          <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5F6B70]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search hackathons by name, skill, or organizer..."
            className="w-full rounded-xl border border-[#E8DFD1] bg-[#FAF6EE]/50 py-2.5 pl-10 pr-4 text-sm text-[#17232A] placeholder-[#5F6B70] outline-none transition focus:border-[#299F95] focus:bg-white focus:ring-2 focus:ring-[#299F95]/15"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 border-t border-[#F0E8DC] pt-3">
          <span className="flex items-center gap-1 text-xs font-semibold text-[#5F6B70] mr-1">
            <SlidersHorizontal size={13} />
            Mode:
          </span>
          {modes.map((mode) => (
            <button
              key={mode}
              onClick={() => setSelectedMode(mode)}
              className={`rounded-full border px-3.5 py-1 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedMode === mode
                  ? "border-[#299F95] bg-[#299F95] text-white shadow-2xs"
                  : "border-[#E8DFD1] bg-white text-[#17232A] hover:border-[#299F95] hover:bg-[#299F95]/5"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Hackathon Cards */}
      <div className="space-y-5">
        {filteredHackathons.map((hackathon) => (
          <article
            key={hackathon.id}
            className="group rounded-2xl border border-[#E8DFD1] bg-white p-6 shadow-2xs transition-all duration-200 hover:shadow-md hover:border-[#299F95]/50"
          >
            {/* Top */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0 flex-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#299F95]">
                  {hackathon.organizer}
                </span>

                <h2 className="mt-1 text-xl font-bold tracking-tight text-[#17232A] group-hover:text-[#299F95] transition-colors">
                  {hackathon.title}
                </h2>

                <p className="mt-2 text-xs leading-relaxed text-[#5F6B70]">
                  {hackathon.description}
                </p>

                {/* Details */}
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#5F6B70]">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays size={14} className="text-[#299F95]" />
                    <span>{hackathon.date}</span>
                  </span>

                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-[#E96D51]" />
                    <span className="rounded-md bg-[#FFF3DC] px-2 py-0.5 text-[11px] font-semibold text-[#17232A]">
                      {hackathon.mode}
                    </span>
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Users size={14} className="text-[#5F6B70]" />
                    <span>{hackathon.participants}</span>
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Clock3 size={14} className="text-[#B88B22]" />
                    <span className="font-semibold text-[#17232A]">
                      {hackathon.registration}
                    </span>
                  </span>
                </div>
              </div>

              {/* Match Score Box (Honest Coming Soon) */}
              <div className="flex sm:flex-col items-center justify-between sm:justify-center rounded-xl border border-[#E8DFD1] bg-[#FAF6EE] px-4 py-2.5 text-center shrink-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#5F6B70]">
                  Skill Match
                </span>
                <span className="text-xl font-bold text-[#5F6B70]">
                  —
                </span>
                <span className="text-[10px] text-[#5F6B70]">
                  Coming soon
                </span>
              </div>
            </div>

            {/* Skills */}
            <div className="mt-4 flex flex-wrap items-center gap-1.5 border-t border-[#F0E8DC] pt-3">
              <span className="text-[11px] font-semibold text-[#5F6B70] mr-1">
                Relevant Topics:
              </span>
              {hackathon.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-[#E8DFD1] bg-[#FAF6EE] px-2.5 py-0.5 text-xs font-medium text-[#17232A]"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="mt-5 flex items-center justify-between border-t border-[#F0E8DC] pt-4">
              <span className="text-xs font-semibold text-[#299F95]">
                {hackathon.prize}
              </span>

              <button className="flex items-center gap-1.5 rounded-xl bg-[#299F95] px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-[#22847C]">
                <span>View Event Details</span>
                <ExternalLink size={13} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Hackathons;