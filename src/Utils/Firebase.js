// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBhzpx-EdA3JQTxTBxfzJxZgkR_j1mThM",
  authDomain: "netflixgpt-6652d.firebaseapp.com",
  projectId: "netflixgpt-6652d",
  storageBucket: "netflixgpt-6652d.firebasestorage.app",
  messagingSenderId: "529612779000",
  appId: "1:529612779000:web:49eb197cb0c9f34e8d7a0d",
  measurementId: "G-LBDXFYCTLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);