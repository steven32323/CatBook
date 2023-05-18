import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyANjgJYiYFZPXl1UA7cjKPwAZ4d5zFqBdY",
  authDomain: "react-facebook-4c677.firebaseapp.com",
  databaseURL:
    "https://react-facebook-4c677-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-facebook-4c677",
  storageBucket: "react-facebook-4c677.appspot.com",
  messagingSenderId: "565738602784",
  appId: "1:565738602784:web:421882798b4ff49ee15745",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
