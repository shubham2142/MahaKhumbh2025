import React from 'react';
import { useNavigate } from 'react-router-dom';
import Upload from "../components/Upload";
import { UploadCloud } from "lucide-react";

const Workflow = () => {
  const navigate = useNavigate();

  const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      navigate("/analyzer", {
        state: {
          images: [URL.createObjectURL(file)],
          heatmap: `data:image/png;base64,${data.heatmap}`,
          count: data.count,
        },
      });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 to-sky-300 px-6 py-10 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 w-full max-w-3xl text-center border border-orange-200">
        <div className="flex justify-center mb-6">
          <div className="bg-orange-100 p-4 rounded-full shadow-inner">
            <UploadCloud className="text-orange-500 w-10 h-10" />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-orange-700 mb-4">
          Mahakumbh Crowd Detection
        </h1>

        <p className="text-gray-600 text-md sm:text-lg mb-8 leading-relaxed">
          Upload an image to estimate crowd density and generate a heatmap.
          This tool helps ensure safe and efficient crowd management during
          Mahakumbh 2025.
        </p>

        <Upload onUpload={handleUpload} />
      </div>
    </div>
  );
};

export default Workflow;
