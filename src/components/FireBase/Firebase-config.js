
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCOH67OsZyJdAA7Gm_djOLeHqtyAtgHbME",
  authDomain: "monkey-blogging-bad04.firebaseapp.com",
  projectId: "monkey-blogging-bad04",
  storageBucket: "monkey-blogging-bad04.firebasestorage.app",
  messagingSenderId: "958363245425",
  appId: "1:958363245425:web:f37c13fb812658537874d0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);