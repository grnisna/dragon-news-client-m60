// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcch_6nam-6p6cOYztbBksfXlFn9_nwFM",
  authDomain: "dragon-news-client-f12ab.firebaseapp.com",
  projectId: "dragon-news-client-f12ab",
  storageBucket: "dragon-news-client-f12ab.appspot.com",
  messagingSenderId: "966206088034",
  appId: "1:966206088034:web:1dca3552ad4c93ae32423b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;