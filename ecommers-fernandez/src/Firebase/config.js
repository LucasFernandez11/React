import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTpq7o5PW0dSIKgJQbq03J_MEbKp3mspI",
  authDomain: "ecommerce-fernandez.firebaseapp.com",
  projectId: "ecommerce-fernandez",
  storageBucket: "ecommerce-fernandez.appspot.com",
  messagingSenderId: "263900774927",
  appId: "1:263900774927:web:b1da5e524305fe9fd8197a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)