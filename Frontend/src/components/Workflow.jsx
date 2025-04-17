// Workflow.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Workflow = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...imageUrls]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...imageUrls]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleAnalyzeClick = () => {
    // Send image URLs to analyzer page
    navigate("/analyzer", { state: { images } });
  };

  return (
    <div className="mt-20 px-4 ">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Upload Images for{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Mahakumbh Crowd Detection
        </span>
      </h2>

      <p className="text-center mt-6 text-neutral-600 text-lg max-w-3xl mx-auto">
        Analyze the crowd density and estimate people count from your images. This helps
        in ensuring safety and better management during Mahakumbh events.
      </p>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 mt-12">
        <div className="w-full lg:w-1/2 flex justify-center">
          <div
            className="border-4 border-dashed border-orange-600 p-8 rounded-xl w-full max-w-md text-center transition hover:bg-neutral-700"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <p className="text-xl font-semibold mb-2 text-black-700">
              Drag & Drop Images
            </p>
            <p className="text-md text-orange-800 mb-4">
              or use the file selector below
            </p>

            <input
              type="file"
              accept="image/*"
              multiple
              className="p-2 border border-gray-300 rounded w-full"
              onChange={handleFileChange}
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-wrap justify-center gap-4">
          {images.length > 0 ? (
            images.map((imgSrc, index) => (
              <div
                key={index}
                className="w-40 h-40 border-2 border-gray-300 rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={imgSrc}
                  alt={`Uploaded ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center">No images uploaded yet</p>
          )}
        </div>
      </div>

      {images.length > 0 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleAnalyzeClick}
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Image Analyzer
          </button>
        </div>
      )}
    </div>
  );
};

export default Workflow;
