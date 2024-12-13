// selector
const menu = document.querySelector(".hamburger");
const quitMenu = document.querySelector(".left");

menu.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("a");
  
  showMenu();
});
const showMenu = () => {
    console.log("showMenu");
    
  const menuState = document.querySelector(".menu-list");
  console.log(menuState);
  
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
