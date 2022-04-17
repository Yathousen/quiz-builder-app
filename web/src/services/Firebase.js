import { initializeApp } from 'firebase/app';
import {
  getAuth as Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  connectAuthEmulator,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { getFirestore as Firestore, connectFirestoreEmulator } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDcxnmvYxSPML7DhhS_WLfTaqPxktTVKq4',
  authDomain: 'quiz-builder-app.firebaseapp.com',
  projectId: 'quiz-builder-app',
  storageBucket: 'quiz-builder-app.appspot.com',
  messagingSenderId: '858857180971',
  appId: '1:858857180971:web:e439951c497a43e8ab7f6e',
  measurementId: 'G-7DVQ8ZGXRH',
};

const Firebase = {
  Firebase: initializeApp(firebaseConfig),
  Auth,
  Firestore,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
};

connectAuthEmulator(Auth(), 'http://localhost:8080');
connectFirestoreEmulator(Firestore(), 'http://localhost:8081');

export default Firebase;
