// ServicesSection.jsx
import React from "react";

const ServiceSection = () => {
  return (
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-orange-600 mb-6">
        Our Services & Functionality
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Real-time Crowd Count</h3>
          <p className="text-neutral-600">
            Monitor crowd density in real-time with precise, data-driven metrics.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Image Upload & Analysis</h3>
          <p className="text-neutral-600">
            Upload images to detect crowd numbers and analyze patterns in the crowd's behavior.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Safety Alerts & Insights</h3>
          <p className="text-neutral-600">
            Get instant alerts on unsafe crowd levels and receive suggestions to manage the crowd better.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
