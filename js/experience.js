import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

let selectedLevel = "";

// Protect page
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "index.html";
  }
});

// Tile selection
window.selectLevel = function (level) {
  selectedLevel = level;

  document.querySelectorAll(".tile").forEach(tile =>
    tile.classList.remove("selected")
  );

  document.getElementById(level).classList.add("selected");
  document.getElementById("continueBtn").disabled = false;
};

// Continue button
window.continueNext = function () {
  if (!selectedLevel) return;

  // Store selection (temporary)
  localStorage.setItem("experienceLevel", selectedLevel);

  window.location.href = "field.html";
};