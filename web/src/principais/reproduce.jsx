import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Download = () => {
  const api = "http://localhost:4000";
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    // Fetch the uploads from Firestore or your backend API
    axios.get(api + '/download')
      .then(response => {
        const uploadsData = response.data;
        setUploads(uploadsData);
      })
      .catch(error => {
        console.error('Error fetching uploads:', error);
      });
  }, []);

  const onDownload = (downloadURL, name) => {
    // Create a temporary link element to trigger the file download
    const link = document.createElement('a');
    link.href = downloadURL;
    link.setAttribute('download', name);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h3>Downloads</h3>
      {uploads.map(upload => (
        <div key={upload.id}>
          <p>File Name: {upload.name}</p>
          <p>File Size: {upload.size}</p>
          <p>File Type: {upload.type}</p>
          <button onClick={() => onDownload(upload.downloadURL, upload.name)}>
            Download
          </button>
        </div>
      ))}
    </div>
  );
};

export default Download;
