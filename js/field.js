let selectedField = "";

window.selectField = function (field) {
  selectedField = field;

  document.querySelectorAll(".tile").forEach(t =>
    t.classList.remove("selected")
  );

  document.getElementById(field).classList.add("selected");
  document.getElementById("continueBtn").disabled = false;
};

window.goNext = function () {
  localStorage.setItem("field", selectedField);
  window.location.href = "template.html";
};