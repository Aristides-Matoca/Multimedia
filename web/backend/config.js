import firebase from 'firebase';
import 'firebase/storage/dist/index.cjs.js';

const firebaseConfig = {
    apiKey: "AIzaSyB7JySMLGe7HJzc6Ab_LyQJH3zTSR8VoyA",
    authDomain: "ispmedia-79115.firebaseapp.com",
    projectId: "ispmedia-79115",
    storageBucket: "ispmedia-79115.appspot.com",
    messagingSenderId: "472886453357",
    appId: "1:472886453357:web:5abf20f7c777e20741cb64"
  };

  firebase.initializeApp(firebaseConfig);

  export const storage = firebase.storage();

  const db = firebase.firestore();
  export const UsuariosOn = db.collection("usuariosOn");
  export const Upload = db.collection("upload");

  export const Pessoa = db.collection("pessoa");