// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.evn.REACT_app_apiKey,
  authDomain:process.evn.REACT_app_authDomain,
  projectId:process.evn.REACT_app_projectId,
  storageBucket:process.evn.REACT_app_storageBucket,
  messagingSenderId:process.evn.REACT_app_messagingSenderId,
  appId:process.evn.REACT_app_appId, 
  measurementId:process.evn.REACT_app_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;