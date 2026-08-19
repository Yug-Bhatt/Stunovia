import { useState } from "react";
import InterestChip from "../common/InterestChip";

const InterestSection = ({ interests = [] }) => {
  const [selectedInterest, setSelectedInterest] = useState(null);

  if (!interests || interests.length === 0) {
    return null;
  }

  return (
    <section className="rounded-2xl glass-card p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[#5F6B70]">
            Filter by Tracked Topics
          </h2>
        </div>
        <span className="text-xs text-[#5F6B70]">
          {interests.length} topics from profile
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        <InterestChip
          title="All Topics"
          active={selectedInterest === null}
          onClick={() => setSelectedInterest(null)}
        />
        {interests.map((interest) => (
          <InterestChip
            key={interest}
            title={interest}
            active={selectedInterest === interest}
            onClick={() =>
              setSelectedInterest(selectedInterest === interest ? null : interest)
            }
          />
        ))}
      </div>
    </section>
  );
};

export default InterestSection;