// firebase-auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
// import { getDatabase } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  doc,
  deleteDoc,
  onSnapshot,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_w0Rx2AMaGSk_QJUicoC3-4zVX21uCcA",
  authDomain: "jsi11-final-efc37.firebaseapp.com",
  projectId: "jsi11-final-efc37",
  storageBucket: "jsi11-final-efc37.appspot.com",
  messagingSenderId: "520852152848",
  appId: "1:520852152848:web:1fd5e4dce6ae5c93366095"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  collection,
  addDoc,
  getDoc,
  getDocs,
  doc,
  deleteDoc,
  setDoc,
  updateDoc,
  onSnapshot,
  serverTimestamp,
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
};
