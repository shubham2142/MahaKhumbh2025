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
            backgroundColor: "rgba(70, 130, 180, 0.2)", // Light steel blue fill
            borderColor: "rgba(70, 130, 180, 1)", // Steel blue border
            tension: 0.4,
            pointRadius: 6,
            pointHoverRadius: 10,
            pointBackgroundColor: "rgba(70, 130, 180, 1)", // Steel blue points
            pointBorderColor: "rgba(255, 255, 255, 1)", // White border for points
            pointBorderWidth: 2,
            borderWidth: 2,
            lineTension: 0.4,
            hoverBackgroundColor: "rgba(70, 130, 180, 0.6)",
          },
        ],
      };

      // Gradient background for fill
      const ctx = chartRef.current.getContext("2d");
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, "rgba(70, 130, 180, 0.6)"); // Start color (blue)
      gradient.addColorStop(1, "rgba(70, 130, 180, 0)"); // End color (transparent)

      // Update dataset with gradient background
      data.datasets[0].backgroundColor = gradient;

      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const newChart = new Chart(chartRef.current, {
        type: "line",
        data: data,
        options: {
          responsive: true,
          animations: {
            tension: {
              duration: 1000,
              easing: "easeInOutQuad",
              from: 0.4,
              to: 0.2,
            },
          },
          plugins: {
            tooltip: {
              mode: "index",
              intersect: false,
              backgroundColor: "#ffffff",
              titleColor: "#333",
              bodyColor: "#333",
              borderColor: "rgba(70, 130, 180, 0.6)",
              borderWidth: 1,
              caretSize: 8,
              cornerRadius: 6,
              padding: 12,
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
                font: {
                  size: 12,
                  family: "Arial, sans-serif",
                },
              },
              grid: {
                borderColor: "rgba(0, 0, 0, 0.1)",
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: "#374151",
                font: {
                  size: 12,
                  family: "Arial, sans-serif",
                },
              },
              grid: {
                borderColor: "rgba(0, 0, 0, 0.1)",
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
