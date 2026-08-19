import { MapPin, CalendarDays, ExternalLink } from "lucide-react";

const InternshipCard = ({ opportunity }) => {
  if (!opportunity) return null;

  return (
    <article className="group rounded-2xl border border-[#E8DFD1] bg-white p-6 shadow-2xs transition-all duration-200 hover:border-[#299F95]/40 hover:shadow-xs">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <span className="text-xs font-semibold text-[#299F95]">
            {opportunity.company || "Company"}
          </span>
          <h3 className="mt-1 text-base font-bold text-[#17232A] group-hover:text-[#299F95] transition-colors">
            {opportunity.title}
          </h3>
        </div>

        <span className="shrink-0 rounded-lg border border-[#E8DFD1] bg-[#FAF6EE] px-2.5 py-1 text-[11px] font-medium text-[#5F6B70]">
          Not yet scored
        </span>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-[#5F6B70]">
        <span className="flex items-center gap-1">
          <MapPin size={13} className="text-[#5F6B70]" />
          <span>{opportunity.location || "Flexible"}</span>
        </span>
        <span className="flex items-center gap-1">
          <CalendarDays size={13} className="text-[#5F6B70]" />
          <span>{opportunity.deadline || "Open"}</span>
        </span>
      </div>

      {opportunity.description && (
        <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-[#5F6B70]">
          {opportunity.description}
        </p>
      )}

      <div className="mt-4 flex items-center justify-between border-t border-[#F0E8DC] pt-3">
        <span className="text-xs text-[#5F6B70]">
          {opportunity.opportunity_type || "Internship"}
        </span>

        {opportunity.application_url && (
          <a
            href={opportunity.application_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-semibold text-[#299F95] transition hover:text-[#22847C]"
          >
            <span>Apply</span>
            <ExternalLink size={12} />
          </a>
        )}
      </div>
    </article>
  );
};

export default InternshipCard;