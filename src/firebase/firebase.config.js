// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMHaijgDSHckSkBMAcUxF8LJcjfBLAe90",
  authDomain: "chef-recipe-firebase-aut-edf1f.firebaseapp.com",
  projectId: "chef-recipe-firebase-aut-edf1f",
  storageBucket: "chef-recipe-firebase-aut-edf1f.appspot.com",
  messagingSenderId: "839549194216",
  appId: "1:839549194216:web:27dac51ac14a76f73d5e5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;