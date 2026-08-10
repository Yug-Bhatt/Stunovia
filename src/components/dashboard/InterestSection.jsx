import InterestChip from "../common/InterestChip";

const InterestSection = () => {
  return (
    <div className="mt-10">

      <h2 className="mb-5 text-xl font-semibold">
        Your Interests
      </h2>

      <div className="flex flex-wrap gap-3">

        <InterestChip title="AI & ML" active />
        <InterestChip title="Data Science" />
        <InterestChip title="Web Development" />
        <InterestChip title="Cloud Computing" />
        <InterestChip title="Competitive Programming" />
        <InterestChip title="+2 More" />

      </div>

    </div>
  );
};

export default InterestSection;