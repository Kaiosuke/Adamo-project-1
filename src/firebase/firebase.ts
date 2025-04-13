// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkwHzuXzIt0BmUZyUhk0abOPfYZiPrbV0",
  authDomain: "authentication-5af5a.firebaseapp.com",
  projectId: "authentication-5af5a",
  storageBucket: "authentication-5af5a.firebasestorage.app",
  messagingSenderId: "311211569121",
  appId: "1:311211569121:web:e5b3db5b76d236506aaca0",
  measurementId: "G-0EN9PXKXY7",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const facebookProvider = new FacebookAuthProvider();
export { app, analytics, auth, facebookProvider };
