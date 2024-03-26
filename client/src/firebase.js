// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-1f5a6.firebaseapp.com",
  projectId: "mern-blog-1f5a6",
  storageBucket: "mern-blog-1f5a6.appspot.com",
  messagingSenderId: "1080374363276",
  appId: "1:1080374363276:web:baa59bcfa28fe4d954a7a9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

