import React, { useState } from "react";
import api from "./api";
import { toast } from "react-toastify";
function FileUpload({ onUploadComplete }) {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    try {
      await api.post("/upload/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Upload successful!");
      onUploadComplete();
      setFile(null);
    } catch (error) {
      toast.error("Upload failed. Please try again.");
    }
  };

  return (
    <div className="upload-section">
      <input
        type="file"
        accept=".csv"
        className="file-input"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button className="upload-button" onClick={handleUpload}>
        Upload CSV
      </button>
    </div>
  );
}

export default FileUpload;