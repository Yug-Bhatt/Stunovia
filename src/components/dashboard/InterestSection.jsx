import InterestChip from "../common/InterestChip";


const InterestSection = ({ interests }) => {

  return (
    <div className="mt-10">

      <h2 className="mb-5 text-xl font-semibold">
        Your Interests
      </h2>


      <div className="flex flex-wrap gap-3">

        {interests.map((interest, index) => (

          <InterestChip
            key={interest}
            title={interest}
            active={index === 0}
          />

        ))}

      </div>

    </div>
  );
};


export default InterestSection;