import {
  Briefcase,
  MapPin,
  CalendarDays,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

const InternshipSection = ({ opportunities = [] }) => {
  const displayedOpportunities = Array.isArray(opportunities)
    ? opportunities.slice(0, 3)
    : [];

  return (
    <div className="rounded-2xl glass-card p-6">
      {/* Section Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E8DFD1] bg-[#FAF6EE]/80 text-[#5F6B70]">
            <Briefcase size={18} />
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight text-[#17232A]">
              Recommended Opportunities
            </h2>
          </div>
        </div>

        <Link
          to="/internships"
          className="group flex items-center gap-1 text-xs font-semibold text-[#299F95] transition hover:text-[#22847C]"
        >
          <span>View All</span>
          <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* Opportunity List */}
      <div className="space-y-3">
        {displayedOpportunities.length === 0 ? (
          <div className="rounded-lg border border-[#E8DFD1] bg-[#FAF6EE] p-6 text-center">
            <p className="text-sm font-semibold text-[#17232A]">
              No active postings
            </p>
            <p className="text-xs text-[#5F6B70] mt-1">
              New opportunities will appear here as they are published.
            </p>
          </div>
        ) : (
          displayedOpportunities.map((opportunity) => (
            <div
              key={opportunity.id}
              className="group rounded-lg border border-[#E8DFD1] bg-[#FAF6EE]/50 p-4 transition-all duration-200 hover:border-[#299F95]/40 hover:bg-[#FAF6EE] hover:shadow-xs"
            >
              {/* Header: Company & Quiet Match Score */}
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-semibold text-[#299F95]">
                    {opportunity.company || "Company"}
                  </span>
                  <h3 className="mt-0.5 truncate text-sm font-bold text-[#17232A]">
                    {opportunity.title}
                  </h3>
                </div>

                <span className="shrink-0 rounded-lg border border-[#E8DFD1] bg-white px-2 py-0.5 text-[11px] font-medium text-[#5F6B70]">
                  Not yet scored
                </span>
              </div>

              {/* Metadata */}
              <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#5F6B70]">
                <span className="flex items-center gap-1">
                  <MapPin size={12} className="text-[#5F6B70]" />
                  <span className="truncate max-w-[130px]">
                    {opportunity.location || "Flexible"}
                  </span>
                </span>

                <span className="flex items-center gap-1">
                  <CalendarDays size={12} className="text-[#5F6B70]" />
                  <span>{opportunity.deadline || "Open"}</span>
                </span>
              </div>

              {/* Action Button */}
              <div className="mt-3 flex items-center justify-between border-t border-[#E8DFD1] pt-2.5">
                <span className="text-xs text-[#5F6B70]">
                  {opportunity.opportunity_type || "Opportunity"}
                </span>

                {opportunity.application_url ? (
                  <a
                    href={opportunity.application_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#299F95] transition hover:text-[#22847C]"
                  >
                    <span>Apply</span>
                    <ExternalLink size={12} />
                  </a>
                ) : (
                  <span className="text-xs text-[#5F6B70]">Direct posting</span>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Bottom Action */}
      <Link
        to="/internships"
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-[#E8DFD1] bg-white py-2.5 text-xs font-semibold text-[#17232A] transition hover:border-[#299F95] hover:text-[#299F95]"
      >
        <span>Explore All Opportunities</span>
        <ArrowRight size={13} />
      </Link>
    </div>
  );
};

export default InternshipSection;

