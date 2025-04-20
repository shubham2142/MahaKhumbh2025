import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import axios from "axios";

const TimeSeriesChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [clickedData, setClickedData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/history").then((res) => {
      const times = res.data.map((row) => row.timestamp);
      const counts = res.data.map((row) => parseFloat(row.count));
      const data = {
        labels: times,
        datasets: [
          {
            label: "People Count Over Time",
            data: counts,
            fill: true,
            backgroundColor: "rgba(255, 165, 0, 0.2)",
            borderColor: "orange",
            tension: 0.4,
            pointRadius: 5,
            pointHoverRadius: 7,
            pointBackgroundColor: "orange",
          },
        ],
      };

      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const newChart = new Chart(chartRef.current, {
        type: "line",
        data: data,
        options: {
          responsive: true,
          plugins: {
            tooltip: {
              mode: "index",
              intersect: false,
            },
            legend: {
              display: true,
              labels: {
                color: "black",
                font: {
                  size: 14,
                },
              },
            },
          },
          interaction: {
            mode: "nearest",
            axis: "x",
            intersect: false,
          },
          onClick: (evt, elements) => {
            if (elements.length > 0) {
              const pointIndex = elements[0].index;
              const timestamp = data.labels[pointIndex];
              const count = data.datasets[0].data[pointIndex];
              setClickedData({ timestamp, count });
            }
          },
          scales: {
            x: {
              ticks: {
                color: "#374151", // Gray-700
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: "#374151",
              },
            },
          },
        },
      });

      chartInstanceRef.current = newChart;
    });
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-orange-600 mb-4 text-center">
        Crowd Count Trend
      </h2>
      <canvas ref={chartRef} className="mb-6" />
      {clickedData && (
        <div className="text-center mt-4 text-gray-700">
          <p>
            📍 <strong>Timestamp:</strong> {clickedData.timestamp}
          </p>
          <p>
            👥 <strong>People Count:</strong> {clickedData.count}
          </p>
        </div>
      )}
    </div>
  );
};

export default TimeSeriesChart;
