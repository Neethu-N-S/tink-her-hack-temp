import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// SIGN UP FUNCTION
window.signup = function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("msg");

  if (!email || !password) {
    msg.innerText = "Please enter email and password";
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      if (error.code === "auth/email-already-in-use") {
        msg.style.color = "#39ff14";
        msg.innerText = "Account already exists. Please login.";
      } else {
        msg.style.color = "red";
        msg.innerText = error.message;
      }
    });
};

// LOGIN FUNCTION
window.login = function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("msg");

  if (!email || !password) {
    msg.innerText = "Please enter email and password";
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      msg.style.color = "red";
      msg.innerText = "Invalid login credentials";
    });
};