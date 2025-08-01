import { useState } from 'react';

const Upload = ({ onUpload }) => {
  const [preview, setPreview] = useState(null);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      onUpload(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      onUpload(file);
    }
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={e => e.preventDefault()}
      className="border-2 border-dashed border-gray-400 p-6 text-center bg-white"
    >
      {/* ✅ Updated line below */}
      <input type="file" accept="image/*" onChange={handleFile} className="mb-2" />
      <p>Drag & drop image here or click to upload</p>
      {preview && <img src={preview} alt="Preview" className="mx-auto mt-4 max-h-64" />}
    </div>
  );
};

export default Upload;
