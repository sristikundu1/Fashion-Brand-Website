// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1EYaSp0SyEqjSWSKPOOq3AtSGAtQsxr0",
  authDomain: "elysian-wardrobe.firebaseapp.com",
  projectId: "elysian-wardrobe",
  storageBucket: "elysian-wardrobe.appspot.com",
  messagingSenderId: "93974376497",
  appId: "1:93974376497:web:c091bab8ea7e78b4096510"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;