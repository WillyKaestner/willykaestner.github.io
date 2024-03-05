// script.js
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
  document.getElementById("infoBox").textContent = code;

  document.getElementById("copyButton").addEventListener("click", function () {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        alert("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Error in copying text: ", err);
      });
  });
});
