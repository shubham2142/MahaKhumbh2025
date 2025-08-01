import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TrafficControl = ({ routeCount }) => {
  const [trafficState, setTrafficState] = useState(Array(routeCount).fill(false));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrafficData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/traffic');
        const stateArray = Array(routeCount).fill(false);

        res.data.forEach(({ routeId, congested }) => {
          const id = parseInt(routeId);
          if (!isNaN(id) && id < routeCount) {
            stateArray[id] = congested;
          }
        });

        setTrafficState(stateArray);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching traffic data:', err);
      }
    };

    fetchTrafficData();
  }, [routeCount]);

  const handleToggle = async (index) => {
    const updated = [...trafficState];
    updated[index] = !updated[index];
    setTrafficState(updated);

    try {
      await axios.post('http://localhost:5000/api/traffic/', {
        routeId: index.toString(),
        congested: updated[index],
        delay: updated[index] ? '5 mins' : '0',
      });

      // Trigger page refresh after the congestion state has been toggled
      window.location.reload();
    } catch (err) {
      console.error('Error updating traffic data:', err);
    }
  };

  if (loading)
    return (
      <div className="text-center text-white text-lg my-4 animate-pulse">
        Loading traffic data...
      </div>
    );

  return (
    <div className="bg-white/10 text-white rounded-xl p-6 mb-6 shadow-md">
      <h3 className="text-2xl font-semibold text-orange-400 mb-4 text-center">
        🚧 Simulate Traffic Congestion
      </h3>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array(routeCount)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-4 rounded-lg shadow hover:shadow-orange-300 transition duration-300"
            >
              <p className="text-lg font-medium mb-2 text-center">
                Route {index}
              </p>

              <div className="flex justify-center mb-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    trafficState[index]
                      ? 'bg-red-500 text-white'
                      : 'bg-green-500 text-white'
                  }`}
                >
                  {trafficState[index] ? 'Congested' : 'Clear'}
                </span>
              </div>

              <button
                onClick={() => handleToggle(index)}
                className={`w-full py-2 px-4 rounded-lg font-semibold transition duration-300 ${
                  trafficState[index]
                    ? 'bg-gradient-to-r from-red-600 to-red-400 hover:from-red-700'
                    : 'bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700'
                }`}
              >
                {trafficState[index]
                  ? 'Remove Congestion'
                  : 'Add Congestion'}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TrafficControl;
