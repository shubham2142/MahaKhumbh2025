import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ImageAnalyzer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const images = location.state?.images || [];
  const heatmap = location.state?.heatmap || null;
  const count = location.state?.count ?? null;

  useEffect(() => {
    if (images.length === 0 || !heatmap || count === null) {
      navigate("/");
    }
  }, [images, heatmap, count, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-sky-500 px-4 py-8">
      <h1 className="text-4xl font-bold text-white text-center mb-12">
        Image Analyzer
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        {/* Left Column: Uploaded Images */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-6 p-6 bg-pink-200 shadow-lg rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Uploaded Images</h2>
          {images.map((imgSrc, index) => (
            <div
              key={index}
              className="w-40 h-40 border-2 border-gray-300 rounded-lg overflow-hidden"
            >
              <img
                src={imgSrc}
                alt={`Uploaded ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right Column: Heatmap */}
        <div className="w-full lg:w-1/2 p-6 bg-red-100 shadow-lg rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Heatmap Analysis
          </h2>

          {/* Display the heatmap */}
          {heatmap ? (
            <img
              src={heatmap}
              alt="Heatmap"
              className="w-full h-[300px] object-contain rounded-lg shadow-md"
            />
          ) : (
            <div className="w-full h-[300px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-medium">
              No Heatmap Available
            </div>
          )}
        </div>
      </div>

      {/* Crowd Count Section with Attractive Box */}
      {count !== null && (
        <div className="mt-12 flex justify-center items-center">
          <div className="w-full lg:w-1/3 p-6 bg-white shadow-xl rounded-lg border border-gray-300">
            <div className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Estimated Crowd Count
            </div>
            <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white text-5xl font-bold text-center py-4 rounded-lg shadow-lg">
              {Math.floor(count)} {/* Ensures the count is displayed as an integer */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageAnalyzer;
