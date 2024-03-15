// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvfA09QpWKMuBlBRNxjFJrOPdcA_EBTHU",
  authDomain: "kayhantechcontactapp.firebaseapp.com",
  projectId: "kayhantechcontactapp",
  storageBucket: "kayhantechcontactapp.appspot.com",
  messagingSenderId: "881765250070",
  appId: "1:881765250070:web:7cfe448ad7b08315fe7137",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
