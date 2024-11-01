// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBieYYN590lokMCvsx2sZNfDzdAAsv0qRY",
  authDomain: "taskflow-danielpizarrodev.firebaseapp.com",
  projectId: "taskflow-danielpizarrodev",
  storageBucket: "taskflow-danielpizarrodev.firebasestorage.app",
  messagingSenderId: "773724885424",
  appId: "1:773724885424:web:089fc9579567ea964b4675",
  measurementId: "G-0V1B3CRQ76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app)

export { db }