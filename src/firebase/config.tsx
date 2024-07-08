import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR7SYDm9wrZCZrXI_DSWBX-kpg5d_wDOc",
  authDomain: "neema-b7c3b.firebaseapp.com",
  databaseURL:
    "https://neema-b7c3b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "neema-b7c3b",
  storageBucket: "neema-b7c3b.appspot.com",
  messagingSenderId: "889261156715",
  appId: "1:889261156715:web:916989730ecd5b896f442e",
  measurementId: "G-DCQWVPBXTG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
