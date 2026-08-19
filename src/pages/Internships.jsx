import { useEffect, useState, useMemo } from "react";
import {
  Briefcase,
  MapPin,
  CalendarDays,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  Loader2,
  Search,
  SlidersHorizontal,
  X,
  Building2,
  CheckCircle2,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { getOpportunities } from "../api/opportunities";

const MetricBadge = ({ label, value, note, icon: Icon, color = "teal" }) => {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-[#E8DFD1] bg-[#FAF6EE]/80 p-3 text-center sm:text-left">
      <div className="flex items-center justify-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#5F6B70] sm:justify-start">
        <Icon size={13} className="text-[#299F95]" />
        <span>{label}</span>
      </div>
      <div className="mt-1 flex items-baseline justify-center gap-1 sm:justify-start">
        <span className="text-xl font-bold text-[#17232A]">
          {value ?? "—"}
        </span>
        {note && (
          <span className="text-[10px] text-[#5F6B70] font-medium">
            {note}
          </span>
        )}
      </div>
    </div>
  );
};

const Internships = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  useEffect(() => {
    const loadOpportunities = async () => {
      try {
        const data = await getOpportunities();
        setOpportunities(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Internship opportunities error:", err);
        setError(err.message || "Failed to load opportunities");
      } finally {
        setLoading(false);
      }
    };

    loadOpportunities();
  }, []);

  // Filter options
  const filterOptions = ["All", "Internship", "Job", "Remote", "Verified"];

  // Fast client-side search & filtering
  const filteredOpportunities = useMemo(() => {
    return opportunities.filter((item) => {
      const q = searchQuery.toLowerCase().trim();

      // Search match across Title, Company, Skills, Location, Description
      const matchesSearch =
        !q ||
        (item.title && item.title.toLowerCase().includes(q)) ||
        (item.company && item.company.toLowerCase().includes(q)) ||
        (item.location && item.location.toLowerCase().includes(q)) ||
        (item.description && item.description.toLowerCase().includes(q)) ||
        (Array.isArray(item.required_skills) &&
          item.required_skills.some((skill) =>
            skill.toLowerCase().includes(q)
          ));

      if (!matchesSearch) return false;

      // Filter match
      if (selectedFilter === "All") return true;
      if (selectedFilter === "Internship") {
        return (
          item.opportunity_type?.toLowerCase().includes("intern") ||
          item.title?.toLowerCase().includes("intern")
        );
      }
      if (selectedFilter === "Job") {
        return (
          item.opportunity_type?.toLowerCase().includes("job") ||
          item.opportunity_type?.toLowerCase().includes("full") ||
          item.title?.toLowerCase().includes("engineer") ||
          item.title?.toLowerCase().includes("developer")
        );
      }
      if (selectedFilter === "Remote") {
        return (
          item.location?.toLowerCase().includes("remote") ||
          item.description?.toLowerCase().includes("remote")
        );
      }
      if (selectedFilter === "Verified") {
        return item.verified === true;
      }

      return true;
    });
  }, [opportunities, searchQuery, selectedFilter]);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#299F95]/10 text-[#299F95]">
            <Briefcase size={22} />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#17232A] sm:text-3xl">
              Internships & Career Opportunities
            </h1>
            <p className="mt-0.5 text-sm text-[#5F6B70]">
              Real-time engineering and tech opportunities aggregated from verified external feeds.
            </p>
          </div>
        </div>
      </div>

      {/* AI Insight Banner */}
      <div className="flex flex-col sm:flex-row items-start gap-3.5 rounded-2xl border border-[#299F95]/30 bg-[#FFF3DC]/80 p-5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#299F95] text-white">
          <Sparkles size={17} />
        </div>
        <div>
          <h2 className="text-sm font-bold text-[#17232A]">
            Opportunity Intelligence & Verification
          </h2>
          <p className="mt-0.5 text-xs leading-relaxed text-[#5F6B70]">
            Stunovia imports real opportunities via live RSS and career feeds. Personalized Match Scores and Trust Scores will be calculated against your student profile skills in the next update.
          </p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="rounded-2xl border border-[#E8DFD1] bg-white p-4 shadow-2xs space-y-4">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5F6B70]"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, company, skills (e.g. Python, React), or location..."
            className="w-full rounded-xl border border-[#E8DFD1] bg-[#FAF6EE]/50 py-2.5 pl-10 pr-10 text-sm text-[#17232A] placeholder-[#5F6B70] outline-none transition focus:border-[#299F95] focus:bg-white focus:ring-2 focus:ring-[#299F95]/15"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-[#5F6B70] hover:bg-[#E8DFD1]/50 hover:text-[#17232A]"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-[#F0E8DC]">
          <span className="flex items-center gap-1 text-xs font-semibold text-[#5F6B70] mr-1">
            <SlidersHorizontal size={13} />
            Filter:
          </span>
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`rounded-full border px-3.5 py-1 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedFilter === filter
                  ? "border-[#299F95] bg-[#299F95] text-white shadow-2xs"
                  : "border-[#E8DFD1] bg-white text-[#17232A] hover:border-[#299F95] hover:bg-[#299F95]/5"
              }`}
            >
              {filter}
            </button>
          ))}

          <span className="ml-auto text-xs font-medium text-[#5F6B70]">
            Showing <strong className="text-[#17232A]">{filteredOpportunities.length}</strong> of{" "}
            {opportunities.length} opportunities
          </span>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex min-h-[350px] flex-col items-center justify-center gap-3 rounded-2xl border border-[#E8DFD1] bg-white p-12">
          <Loader2 size={28} className="animate-spin text-[#299F95]" />
          <p className="text-sm font-semibold text-[#5F6B70]">
            Fetching live opportunities from RSS feeds...
          </p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="rounded-2xl border border-[#E96D51]/30 bg-white p-8 text-center">
          <p className="text-base font-bold text-[#E96D51]">
            Unable to retrieve opportunities from backend
          </p>
          <p className="mt-1 text-xs text-[#5F6B70]">{error}</p>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && filteredOpportunities.length === 0 && (
        <div className="rounded-2xl border border-[#E8DFD1] bg-white p-12 text-center shadow-2xs">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF3DC] text-[#B88B22]">
            <Briefcase size={28} />
          </div>
          <h2 className="mt-4 text-lg font-bold text-[#17232A]">
            No matching opportunities found
          </h2>
          <p className="mt-1.5 text-xs text-[#5F6B70] max-w-sm mx-auto">
            {searchQuery || selectedFilter !== "All"
              ? "Try adjusting your search keywords or resetting filters to see all available listings."
              : "New opportunities are synced periodically. Check back soon for fresh postings."}
          </p>
          {(searchQuery || selectedFilter !== "All") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedFilter("All");
              }}
              className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-[#299F95] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#22847C]"
            >
              Reset Filters
            </button>
          )}
        </div>
      )}

      {/* Opportunity Cards List */}
      {!loading && !error && filteredOpportunities.length > 0 && (
        <div className="space-y-4">
          {filteredOpportunities.map((opportunity) => (
            <article
              key={opportunity.id}
              className="group rounded-2xl border border-[#E8DFD1] bg-white p-6 shadow-2xs transition-all duration-200 hover:shadow-md hover:border-[#299F95]/50"
            >
              {/* Top Row: Company & Title & Top Badge */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#299F95]">
                      {opportunity.company || "Company Confidential"}
                    </span>
                    {opportunity.verified && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#299F95]/10 px-2 py-0.5 text-[10px] font-bold text-[#299F95]">
                        <CheckCircle2 size={11} />
                        Verified
                      </span>
                    )}
                  </div>

                  <h2 className="mt-1 text-xl font-bold tracking-tight text-[#17232A] group-hover:text-[#299F95] transition-colors">
                    {opportunity.title}
                  </h2>

                  {/* Metadata Chips */}
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#5F6B70]">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-[#E96D51]" />
                      <span>{opportunity.location || "Location not specified"}</span>
                    </span>

                    <span className="flex items-center gap-1.5">
                      <Briefcase size={14} className="text-[#299F95]" />
                      <span className="rounded-md bg-[#FFF3DC] px-2 py-0.5 text-[11px] font-semibold text-[#17232A]">
                        {opportunity.opportunity_type || "Opportunity"}
                      </span>
                    </span>

                    {opportunity.deadline && (
                      <span className="flex items-center gap-1.5">
                        <CalendarDays size={14} className="text-[#B88B22]" />
                        <span>Deadline: {opportunity.deadline}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Match Score Indicator (Honest Coming Soon) */}
                <div className="flex sm:flex-col items-center justify-between sm:justify-center rounded-xl border border-[#E8DFD1] bg-[#FAF6EE] px-4 py-2.5 text-center shrink-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#5F6B70]">
                    Match Score
                  </span>
                  <span className="text-xl font-bold text-[#5F6B70]">
                    —
                  </span>
                  <span className="text-[10px] text-[#5F6B70]">
                    Coming soon
                  </span>
                </div>
              </div>

              {/* Description */}
              {opportunity.description && (
                <p className="mt-4 line-clamp-3 text-xs leading-relaxed text-[#5F6B70] border-t border-[#F0E8DC] pt-3">
                  {opportunity.description}
                </p>
              )}

              {/* Required Skills Tags */}
              {Array.isArray(opportunity.required_skills) &&
                opportunity.required_skills.length > 0 && (
                  <div className="mt-4 flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-semibold text-[#5F6B70] mr-1">
                      Required Skills:
                    </span>
                    {opportunity.required_skills.slice(0, 8).map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-[#E8DFD1] bg-[#FAF6EE] px-2.5 py-0.5 text-xs font-medium text-[#17232A]"
                      >
                        {skill.replaceAll("-", " ")}
                      </span>
                    ))}
                  </div>
                )}

              {/* 3 Metric Boxes: Trust, Community, AI Match */}
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <MetricBadge
                  label="Trust Score"
                  value={null}
                  note="Coming soon"
                  icon={ShieldCheck}
                />
                <MetricBadge
                  label="Community Score"
                  value={null}
                  note="Coming soon"
                  icon={Sparkles}
                />
                <MetricBadge
                  label="AI Fit Prediction"
                  value={null}
                  note="Coming soon"
                  icon={Sparkles}
                />
              </div>

              {/* Card Footer with Verified Source & Real Apply Button */}
              <div className="mt-5 flex flex-col gap-3 border-t border-[#F0E8DC] pt-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-1.5 text-xs text-[#5F6B70]">
                  <ShieldCheck size={15} className="text-[#299F95]" />
                  <span>External Verified Opportunity</span>
                </div>

                {opportunity.application_url ? (
                  <a
                    href={opportunity.application_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#299F95] px-5 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-[#22847C]"
                  >
                    <span>View & Apply</span>
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <button
                    disabled
                    className="cursor-not-allowed rounded-xl border border-[#E8DFD1] bg-[#FAF6EE] px-4 py-2 text-xs font-medium text-[#5F6B70]"
                  >
                    Direct Link Unavailable
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default Internships;