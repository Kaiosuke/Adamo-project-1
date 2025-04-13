// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkwHzuXzIt0BmUZyUhk0abOPfYZiPrbV0",
  authDomain: "authentication-5af5a.firebaseapp.com",
  projectId: "authentication-5af5a",
  storageBucket: "authentication-5af5a.firebasestorage.app",
  messagingSenderId: "311211569121",
  appId: "1:311211569121:web:e5b3db5b76d236506aaca0",
  measurementId: "G-0EN9PXKXY7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { app, analytics, auth };
