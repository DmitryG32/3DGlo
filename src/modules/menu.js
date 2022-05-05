const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");

  const handlMenu = () => {
    /* if (!menu.style.transform) {
      menu.style.transform = "translateX(0)";
    } else {
      menu.style.transform = ""; //возвращается базовое состояние
    } */

    menu.classList.toggle("active-menu");
  };

  menuBtn.addEventListener("click", handlMenu);
  closeBtn.addEventListener("click", handlMenu);

  menuItems.forEach((menuItem) =>
    menuItem.addEventListener("click", handlMenu)
  );
};

export default menu;
