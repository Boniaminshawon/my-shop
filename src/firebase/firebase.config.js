// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiVZ6tj4qs3eLJmEjkkpmXxqJCsPU0a9I",
  authDomain: "myshop-a839c.firebaseapp.com",
  projectId: "myshop-a839c",
  storageBucket: "myshop-a839c.appspot.com",
  messagingSenderId: "63732929682",
  appId: "1:63732929682:web:bb099fbfe279ad4bcc824b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;