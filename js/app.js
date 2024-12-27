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
