import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzLyk-e3BYn7nLCXPMO4rK2cIGl49PfSo",
  authDomain: "prodsumiapc.firebaseapp.com",
  projectId: "prodsumiapc",
  storageBucket: "prodsumiapc.appspot.com",
  messagingSenderId: "959536535190",
  appId: "1:959536535190:web:594e9cc44f36bac1ce14b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);