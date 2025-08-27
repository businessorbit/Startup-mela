// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLc1Ku4pw__99a45br7fwUoHuuEf0ANe8",
  authDomain: "event-7a292.firebaseapp.com",
  projectId: "event-7a292",
  storageBucket: "event-7a292.firebasestorage.app",
  messagingSenderId: "673634317660",
  appId: "1:673634317660:web:6d266557c3a37b06153d99",
  measurementId: "G-Z4LCBLLKW9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app , auth};