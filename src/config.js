// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-ZY3AKMdtuVwzkyKPqeL5sVCL_Q8IEzE",
  authDomain: "jackstitches-c8b01.firebaseapp.com",
  projectId: "jackstitches-c8b01",
  storageBucket: "jackstitches-c8b01.appspot.com",
  messagingSenderId: "923463637404",
  appId: "1:923463637404:web:aab7ed14ad2b6474a71059",
  measurementId: "G-Y6H55TF19Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);