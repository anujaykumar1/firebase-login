// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf3y5jfy0x_tLkBpzQuTffapqYznYj56s",
  authDomain: "react-firebase-c43f0.firebaseapp.com",
  projectId: "react-firebase-c43f0",
  storageBucket: "react-firebase-c43f0.appspot.com",
  messagingSenderId: "987498930071",
  appId: "1:987498930071:web:3186d4d5b18b8273616ed2"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);
export default App;
export const Auth = getAuth(App);
