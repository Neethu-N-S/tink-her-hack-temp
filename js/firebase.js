// js/firebase.js

// Import Firebase SDK functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// Optional (only if you want analytics)
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6hp_HsAlmb25y6e0oaTqXoC1GWlQD2dY",
  authDomain: "resumebuilder-79910.firebaseapp.com",
  projectId: "resumebuilder-79910",
  storageBucket: "resumebuilder-79910.firebasestorage.app",
  messagingSenderId: "1069910837668",
  appId: "1:1069910837668:web:cb4aa05d829a05ef4f9931",
  measurementId: "G-Z7RTBFHH8Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Analytics (optional)
export const analytics = getAnalytics(app);