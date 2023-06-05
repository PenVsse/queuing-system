// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeEgNRAaCrDRD-gIFZIGJboghyD4lsVhs",
  authDomain: "inter-bt1.firebaseapp.com",
  projectId: "inter-bt1",
  storageBucket: "inter-bt1.appspot.com",
  messagingSenderId: "255929048187",
  appId: "1:255929048187:web:60f3983a2e0cf223ca56de",
  measurementId: "G-Q76DLJGPD9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
