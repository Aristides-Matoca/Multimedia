import React, { useState } from 'react';
import axios from 'axios';
import { storage } from '../backend/config';

const Upload = () => {
  const api = "http://localhost:4000";

  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState(null);
  const [size, setSize] = useState(null);
  const [type, setType] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const onChangeHandler = event => {
    setSelectedFile(event.target.files[0]);
    const file = event.target.files[0];
    setName(file.name)
    setSize(file.size)
    setType(file.type)
  };

  const onFileUpload = () => {
    if (selectedFile) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child("publico/"+name);

      const uploadTask = fileRef.put(selectedFile);

      uploadTask.on('state_changed', 
        snapshot => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setUploadProgress(progress);
        },
        error => {
          console.error('Error uploading file to Firebase Storage:', error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            axios
              .post(api + '/upload', { downloadURL, name, size, type })
              .then(response => {
                const createdUser = response.data;
                console.log('Created user:', createdUser);
              })
              .catch(error => {
                console.error('Error creating user:', error);
              });
          });
        }
      );

      console.log('Selected file:', selectedFile);
    }
  };

  return (
    <div>
      <h3>Transferir ficheiro</h3>
      <input type="file" onChange={onChangeHandler} name="file" />
      <button onClick={onFileUpload}>Transferir!</button>
      {uploadProgress > 0 && <p>Progress: {uploadProgress}%</p>}
    </div>
  );
};

export default Upload;
