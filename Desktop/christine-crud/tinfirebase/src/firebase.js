import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyAWVnln30QBn-tipXsTXr3cN4zRC9SH3Kg",
    authDomain: "tintin-56866.firebaseapp.com",
    projectId: "tintin-56866",
    storageBucket: "tintin-56866.appspot.com",
    messagingSenderId: "302010990601",
    appId: "1:302010990601:web:b86164db41ad8219db38d8"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();
  