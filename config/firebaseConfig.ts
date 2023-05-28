// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABB8OfSDt7ScV8icPwfcRS9gEbeNezwX0",
  authDomain: "intern-swp.firebaseapp.com",
  projectId: "intern-swp",
  storageBucket: "intern-swp.appspot.com",
  messagingSenderId: "702962736823",
  appId: "1:702962736823:web:d77b2c29caab9c14bbf732",
  measurementId: "G-CBNK5G5EEZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
