import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDcxnmvYxSPML7DhhS_WLfTaqPxktTVKq4",
  authDomain: "quiz-builder-app.firebaseapp.com",
  projectId: "quiz-builder-app",
  storageBucket: "quiz-builder-app.appspot.com",
  messagingSenderId: "858857180971",
  appId: "1:858857180971:web:e439951c497a43e8ab7f6e",
  measurementId: "G-7DVQ8ZGXRH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);