document.addEventListener("DOMContentLoaded", function () {
  fetch("/componentes/footer-eng.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-container").innerHTML = data;
    })
    .catch(error => console.error("Error cargando el footer:", error));
});