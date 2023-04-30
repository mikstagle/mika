import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyAYlaWihkqjiO9E1h_Ltt9BlnBun_YcxFE",
    authDomain: "tintin-382ea.firebaseapp.com",
    projectId: "tintin-382ea",
    storageBucket: "tintin-382ea.appspot.com",
    messagingSenderId: "84672265398",
    appId: "1:84672265398:web:8179795598e4d476607a17"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();
  