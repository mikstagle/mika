import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyBM0YF6VHzYaorIOn1L0ooayQNNzFJM3ig",
    authDomain: "hil-crud.firebaseapp.com",
    projectId: "hil-crud",
    storageBucket: "hil-crud.appspot.com",
    messagingSenderId: "92489574111",
    appId: "1:92489574111:web:f450ce5840870763b52b6a"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();
  