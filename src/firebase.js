import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging } from "firebase/messaging";

// Initialize Firebase
const app = initializeApp(
  {
    apiKey: "AIzaSyAdMrcFDpKBsAE_mgMmzeuUcJHi1W4co1o",
  authDomain: "inifibackojj.firebaseapp.com",
  databaseURL: "https://inifibackojj-default-rtdb.firebaseio.com",
  projectId: "inifibackojj",
  storageBucket: "inifibackojj.appspot.com",
  messagingSenderId: "317047502444",
  appId: "1:215078169100:web:61f5a720a5ff127b645c29",
  measurementId: "G-XWCJ1BKJY0"
  }
)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export const messaging = getMessaging(app);
