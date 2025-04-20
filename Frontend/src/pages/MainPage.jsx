import React, { useState } from 'react'
import Upload from "../components/Upload"

const MainPage = () => {
    const [count, setCount] = useState(null);
    const [heatmap, setHeatmap] = useState(null);

  
    const handleUpload = async (file) => {
      const formData = new FormData();
      formData.append('image', file);
  
      const res = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setCount(data.count);
      setHeatmap(data.heatmap);
    };
  
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-4">Crowd Counter</h1>
        <Upload onUpload={handleUpload} />
        {count !== null && (
          <div className="mt-6">
            <p className="text-xl">Estimated Count: <strong>{count}</strong></p>
            {heatmap && <img src={`data:image/png;base64,${heatmap}`} alt="Heatmap" className="mt-4" />}
          </div>
        )}
      </div>
    );
}

export default MainPage