// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApeWYFhTNFGiRw-13UOzbWNzTi8gZ4zcs",
  authDomain: "clicker-f6940.firebaseapp.com",
  projectId: "clicker-f6940",
  storageBucket: "clicker-f6940.appspot.com",
  messagingSenderId: "866051501181",
  appId: "1:866051501181:web:7333de785aa9e61dc49514"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore();

