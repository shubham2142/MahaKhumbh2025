import CrowdGraph from "./CrowdGraph";
import CrowdScale from "./CrowdScale";

const Pricing = () => {
  return (
    <div className="mt-10 px-4 bg-neutral-900 text-white"> {/* Dark background */}
      <h2 className="text-4xl sm:text-5xl text-center text-orange-600 mb-10">
        Crowd Analysis
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Graph Section */}
        <CrowdGraph />

        {/* Scale Section */}
        <CrowdScale />
      </div>
    </div>
  );
};

export default Pricing;
