const printButton = document.querySelector("#print-resume");
if (printButton && typeof window.print === "function") {
  printButton.hidden = false;
  printButton.addEventListener("click", () => window.print());
}
document.querySelector("#year").textContent = new Date().getFullYear();
