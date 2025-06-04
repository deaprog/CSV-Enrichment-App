import React, { useState, useEffect } from "react";
import api from "./api";

function FileList({ onSelect }) {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    const response = await api.get("/files/");
    setFiles(response.data);
  };

  return (
    <div className="file-section">
      <h3 className="section-title">Uploaded Files</h3>
      <div className="file-card-grid">
        {files.map((file) => (
          <div key={file.id} className="file-card">
            <div className="file-name">{file.file}</div>
            <button className="view-button" onClick={() => onSelect(file.id)}>
              Preview
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileList;
