import React, { useState } from "react";
import FileUpload from "./FileUpload";
import FileList from "./FileList";
import api from "./api";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [selectedPreview, setSelectedPreview] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const fetchPreview = async (id) => {
    const response = await api.get(`/preview/${id}/`);
    setSelectedPreview(response.data);
  };

  return (
    <div className="container">
      <h1 className="main-title">Adverity CSV Uploader</h1>
      <FileUpload onUploadComplete={() => setRefresh(!refresh)} />
      <FileList key={refresh} onSelect={fetchPreview} />

      {selectedPreview && (
        <div className="preview-section">
          <h3 className="section-title">Preview</h3>
          <div className="table-wrapper">
            <table className="styled-table">
              <thead>
                <tr>
                  {selectedPreview.columns.map((col) => (
                    <th key={col}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {selectedPreview.rows.map((row, index) => (
                  <tr key={index}>
                    {selectedPreview.columns.map((col) => (
                      <td key={col}>{row[col]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
