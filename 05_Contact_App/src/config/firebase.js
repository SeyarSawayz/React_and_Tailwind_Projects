// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWWAvTVCXa0SYXyP1fuTc5uDPAKVZRvIo",
  authDomain: "vite-contact-app-bcdc7.firebaseapp.com",
  projectId: "vite-contact-app-bcdc7",
  storageBucket: "vite-contact-app-bcdc7.appspot.com",
  messagingSenderId: "873798426323",
  appId: "1:873798426323:web:5e6f77ecba3c879fd57e26",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
