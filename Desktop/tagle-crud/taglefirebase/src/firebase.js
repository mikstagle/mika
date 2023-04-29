import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyC5_uWOhpEkcYjD9tXKM4xiGXccfsV3BTg",
    authDomain: "christine-993bd.firebaseapp.com",
    databaseURL: "https://christine-993bd-default-rtdb.firebaseio.com",
    projectId: "christine-993bd",
    storageBucket: "christine-993bd.appspot.com",
    messagingSenderId: "178554582205",
    appId: "1:178554582205:web:6dbb0e0331bfc3da63b3d4"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();
  