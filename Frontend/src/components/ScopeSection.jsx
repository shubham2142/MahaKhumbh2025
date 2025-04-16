import { motion } from "framer-motion";
import React from "react";

const scopeDetails = [
  "Real-time crowd count monitoring using AI-powered surveillance.",
  "Crowd density detection through image and video analysis pipelines.",
  "Heatmap generation for identifying critical congestion zones.",
  "Automated alerts for high-risk zones to aid crowd control teams.",
  "Custom analytics dashboards for decision makers and event coordinators.",
  "Integration with government & local law enforcement systems.",
  "Historical data storage for pattern analysis and future planning.",
  "Mobile-friendly access for field workers and volunteers.",
  "Smart routing suggestions for optimized pedestrian flow.",
  "Drone-based visual intelligence integration with centralized system."
];

const ScopeSection = () => {
  return (
    <div className="bg-neutral-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-orange-500 mb-8"
        >
          Scope of the Project
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-neutral-300 mb-10 max-w-4xl mx-auto"
        >
          The Mahakumbh 2025 crowd management platform leverages AI, computer vision,
          and real-time data pipelines to ensure public safety, manage congestion,
          and streamline large-scale human movement during one of the world's
          largest religious gatherings.
        </motion.p>

        {/* Animated Scope List */}
        <div className="grid sm:grid-cols-2 gap-8 text-left">
          {scopeDetails.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: -30 }} // Move upward when in view
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-neutral-800 rounded-xl border-l-8 border-orange-600 p-6 shadow-lg hover:scale-[1.03] transition-all duration-300"
            >
              <h4 className="text-lg text-orange-400 font-semibold mb-2">
                Feature {index + 1}
              </h4>
              <p className="text-neutral-300">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScopeSection;
