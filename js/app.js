// selector
const menu = document.querySelector(".hamburger");
const quitMenu = document.querySelector(".left");

menu.addEventListener("click", (e) => {
  e.preventDefault();

  showMenu();
});
const showMenu = () => {
  const menuState = document.querySelector(".menu-list");

  if (menuState.classList.contains("menu-visible")) {
    menuState.classList.remove("menu-visible");
  } else {
    menuState.classList.add("menu-visible");
  }
};
quitMenu.addEventListener("click", (e) => {
  e.preventDefault();
  showMenu();
});

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="index.html#"]'); // Selecciona los enlaces que contienen "index.html#"

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Evita la navegación predeterminada
      const targetId = link.getAttribute("href").split("#")[1]; // Obtén el ID del fragmento
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Actualiza la URL sin recargar la página
        history.pushState(null, "", `/${targetId}`);
        // Desplázate al elemento objetivo
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Maneja el retroceso en el historial
  window.addEventListener("popstate", () => {
    const path = window.location.pathname.substring(1); // Obtén la ruta sin la barra inicial
    const targetElement = document.getElementById(path);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});
