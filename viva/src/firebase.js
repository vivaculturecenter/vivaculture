// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxLBOCzbbQFSToLa-15mNOpq0woA77hTU",
  authDomain: "viva-culture-center-ed98e.firebaseapp.com",
  projectId: "viva-culture-center-ed98e",
  storageBucket: "viva-culture-center-ed98e.appspot.com",
  messagingSenderId: "772530752092",
  appId: "1:772530752092:web:7bacffded4899fb913b499",
  measurementId: "G-S4JX1EN4PT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db } ;