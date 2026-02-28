// js/template.js

let selectedTemplateId = null;
let selectedColor = "#39ff14";

// Select a resume template (image)
window.selectTemplate = function (id) {
  selectedTemplateId = id;

  // Remove selection from all previews
  document.querySelectorAll(".template-preview").forEach(img => {
    img.classList.remove("selected");
  });

  // Add selection to clicked preview
  document.querySelectorAll(".template-preview")[id - 1]
    .classList.add("selected");

  // Enable Continue button
  document.getElementById("continueBtn").disabled = false;
};

// Select accent color
window.selectColor = function (color) {
  selectedColor = color;

  // Optional: visually highlight selected color
  document.querySelectorAll(".color-circle").forEach(c => {
    c.style.outline = "none";
  });

  event.target.style.outline = "3px solid #fff";
};

// Continue to resume form
window.continueNext = function () {
  if (!selectedTemplateId) {
    alert("Please select a template");
    return;
  }

  const fontSize = document.getElementById("fontSize").value;

  // Store selections for later use
  localStorage.setItem("selectedTemplate", selectedTemplateId);
  localStorage.setItem("accentColor", selectedColor);
  localStorage.setItem("fontSize", fontSize);

  // Go to resume form page
  window.location.href = "resume-form.html";
};