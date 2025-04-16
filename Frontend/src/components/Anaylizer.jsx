import { useLocation, useNavigate } from "react-router-dom";

const ImageAnalyzer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const images = location.state?.images || [];

  // If no images, redirect back to upload
  if (images.length === 0) {
    navigate("/");
    return null;
  }

  return (
    <div className="mt-20 px-4">
      <h1 className="text-4xl font-bold text-orange-700 text-center mb-10">
        Image Analyzer
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-10">
        {/* Left Column: Uploaded Images */}
        <div className="w-full lg:w-1/2 flex flex-wrap justify-center gap-4">
          {images.map((imgSrc, index) => (
            <div
              key={index}
              className="w-32 h-32 border border-gray-300 rounded-lg shadow-sm overflow-hidden"
            >
              <img
                src={imgSrc}
                alt={`Uploaded ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right Column: Heatmap Section */}
        <div className="w-full lg:w-1/2 border border-gray-300 rounded-lg shadow-md p-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Heatmap Analysis
          </h2>
          <div className="w-full h-[300px] bg-gradient-to-br from-orange-100 via-orange-300 to-orange-500 rounded flex items-center justify-center text-orange-800 font-bold">
            Heatmap Placeholder
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageAnalyzer;
