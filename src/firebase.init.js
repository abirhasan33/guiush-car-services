// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoHylQRsDFn9fwX0fYxOeZpq7BAhdpJa8",
  authDomain: "guiush-car-services.firebaseapp.com",
  projectId: "guiush-car-services",
  storageBucket: "guiush-car-services.appspot.com",
  messagingSenderId: "602784672792",
  appId: "1:602784672792:web:3847ef2d1465945037a76d",
  measurementId: "G-D4LYXLC35X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;