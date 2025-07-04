import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBu_7g9w6av9pkeKnOzTGapVgLWTMBb3ME",
  authDomain: "auth-79559.firebaseapp.com",
  projectId: "auth-79559",
  storageBucket: "auth-79559.firebasestorage.app",
  messagingSenderId: "678411558089",
  appId: "1:678411558089:web:35425342f050a897dbc118",
  measurementId: "G-E6H2S593YL"
};

const app = initializeApp(firebaseConfig);  

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
