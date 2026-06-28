document.addEventListener("DOMContentLoaded", () => {
  const botonesRapidos = document.querySelectorAll(".quick-action");

  botonesRapidos.forEach((boton) => {
    boton.addEventListener("click", () => {
      console.log(`Acción ejecutada: ${boton.textContent.trim()}`);
    });
  });
});
