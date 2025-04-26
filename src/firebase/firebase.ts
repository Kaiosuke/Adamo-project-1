// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth, FacebookAuthProvider } from 'firebase/auth'

const apiKey = import.meta.env.VITE_APP_API_KEY
const appId = import.meta.env.VITE_APP_APP_ID

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: 'authentication-5af5a.firebaseapp.com',
  projectId: 'authentication-5af5a',
  storageBucket: 'authentication-5af5a.firebasestorage.app',
  messagingSenderId: '311211569121',
  appId: appId,
  measurementId: 'G-0EN9PXKXY7'
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)

const facebookProvider = new FacebookAuthProvider()
export { app, analytics, auth, facebookProvider }
