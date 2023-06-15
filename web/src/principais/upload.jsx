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
      let path = "";

      if(type=="audio/mp3"|| type=="audio/wav" || type=="audio/aac" || type=="audio/flac" || type=="audio/ogg" || type=="audio/m4a" || type=="audio/aiff" || type=="audio/wma" || type=="audio/alac" || type=="audio/mid"){
        path= "musica/"+name;
      }
      else if(type=="video/mp4"|| type=="video/avi" || type=="video/mkv" || type=="video/mov" || type=="video/wmv" || type=="video/flv" || type=="video/webm" || type=="video/mpeg" || type=="video/3gp" || type=="video/vob"){
        path= "videos/"+name;
      }
      else if(type=="image/jpg" || type=="image/png" || type=="image/gif" || type=="image/tiff" || type=="image/bmp" || type=="image/webp" || type=="image/svg" || type=="image/raw" || type=="image/psd" || type=="image/ico"){ 
        path= "imagens/"+name;
      }
      else{
        path= "publico/"+name;
      }
      
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
