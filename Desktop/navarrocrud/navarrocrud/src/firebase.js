import firebase from "firebase/compat/app";
import "firebase/compat/database";
const firebaseConfig = {
    apiKey: "AIzaSyCnCfBTHJhOAdvA0BfBE0gixdY_hu0BkwU",
    authDomain: "navarro-20677.firebaseapp.com",
    projectId: "navarro-20677",
    storageBucket: "navarro-20677.appspot.com",
    messagingSenderId: "798300503878",
    appId: "1:798300503878:web:95e6577072b82ff59aef47"
  };
const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref()