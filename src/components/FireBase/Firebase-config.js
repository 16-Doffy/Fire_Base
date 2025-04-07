import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // dùng firestore bản đầy đủ

const firebaseConfig = {
  apiKey: "AIzaSyAVHtFidcu0AXpJQfxm0kLZnoi1bJmzGbw",
  authDomain: "learn--firebase-a43d8.firebaseapp.com",
  projectId: "learn--firebase-a43d8",
  storageBucket: "learn--firebase-a43d8.firebasestorage.app",
  messagingSenderId: "767808850523",
  appId: "1:767808850523:web:1cc081e889607310a38d7e",
  measurementId: "G-C8Q2YZW3GS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
