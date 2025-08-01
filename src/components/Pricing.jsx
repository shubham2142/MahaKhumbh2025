import React from "react";
import TimeSeriesChart from "./TimeSeriesChart";

const Pricing = () => {
  return (
    <div className="bg-gradient-to-br from-neutral-900 via-black to-neutral-800 text-white py-5 px-6 min-h-screen">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-orange-500 mb-12 drop-shadow-lg">
        📈 Crowd Analysis
      </h2>

      <div className="max-w-4xl mx-auto bg-white/10 p-8 rounded-3xl shadow-lg hover:shadow-orange-500/30 transition duration-300">
        <h3 className="text-2xl font-semibold text-orange-400 mb-6 text-center">
          People Count Over Time
        </h3>
        <TimeSeriesChart />
      </div>
    </div>
  );
};

export default Pricing;
