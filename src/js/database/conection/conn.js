// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

const firebaseConfig = {
  apiKey: 'AIzaSyBieYYN590lokMCvsx2sZNfDzdAAsv0qRY',
  authDomain: 'taskflow-danielpizarrodev.firebaseapp.com',
  projectId: 'taskflow-danielpizarrodev',
  storageBucket: 'taskflow-danielpizarrodev.firebasestorage.app',
  messagingSenderId: '773724885424',
  appId: '1:773724885424:web:089fc9579567ea964b4675',
  measurementId: 'G-0V1B3CRQ76'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const google = new  GoogleAuthProvider()

export { app, db, auth, google }