import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Protect dashboard page
onAuthStateChanged(auth, user => {
  if (!user) {
    window.location.href = "index.html";
  }
});

// Button action
window.generateResume = function () {
  // Next page (we’ll build later)
  alert("Resume Builder Page Coming Next 🚀");
  // Example:
  // window.location.href = "resume-form.html";
};