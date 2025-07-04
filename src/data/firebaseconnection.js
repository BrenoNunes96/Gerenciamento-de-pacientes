// firebaseconnection.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC_E2q9hdkGGCfRBiqc10OSqpkUF4VBWqQ",
  authDomain: "hpnovoprojetinho.firebaseapp.com",
  projectId: "hpnovoprojetinho",
  storageBucket: "hpnovoprojetinho.firebasestorage.app",
  messagingSenderId: "98587313920",
  appId: "1:98587313920:web:a324de605ef73f114615e5",
  measurementId: "G-VZ6FLVHHPV"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
