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
    <div className="min-h-screen bg-purple-200 px-4 py-8">
      <h1 className="text-4xl font-bold text-orange-600 text-center mb-12">
        Image Analyzer
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        {/* Left Column: Uploaded Images and Crowd Count */}
        <div className="w-full lg:w-1/2 flex flex-col bg-neutral-500 justify-center items-center gap-6 p-6 bg-white shadow-md rounded-lg border border-gray-200">
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

          {/* Display the crowd count below the uploaded images */}
          {count !== null && (
            <div className="text-center text-lg font-semibold text-gray-800 mt-4">
              Estimated Crowd Count:{" "}
              <span className="font-bold text-orange-600">{count}</span>
            </div>
          )}
        </div>

        {/* Right Column: Heatmap */}
        <div className="w-full lg:w-1/2 p-6 bg-white shadow-md bg-neutral-500 rounded-lg border border-gray-200">
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
    </div>
  );
};

export default ImageAnalyzer;
