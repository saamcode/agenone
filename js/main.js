// toggle button for services content
let toggleBtn = document.querySelector(".toggle-btn");
let toggleContent = document.querySelector(".toggle-content");

function show() {
  if (toggleBtn.innerHTML === "arrow_downward") {
    toggleContent.classList.add("show");
    toggleBtn.innerHTML = "arrow_forward";
  } else {
    toggleContent.classList.remove("show");
    toggleBtn.innerHTML = "arrow_downward";
  }
}
