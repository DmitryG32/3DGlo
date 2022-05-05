const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");
  const modalContent = modal.querySelector(".popup-content");
  const menu = document.querySelector("menu");
  const menuItems = menu.querySelectorAll("ul>li>a");
  const scrollBtn = document.querySelector("a");

  let countLeft = 0;
  let idInterval;

  const modalAnimate = () => {
    countLeft++;
    idInterval = requestAnimationFrame(modalAnimate);

    if (countLeft < 39) {
      modalContent.style.left = countLeft + "%";
    } else {
      cancelAnimationFrame(idInterval);
    }
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";

      if (document.documentElement.clientWidth >= 768) {
        modalAnimate();
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    countLeft = 0;
  });

  menuItems.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const section = document.querySelector(link.getAttribute("href"));

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
      }
    });
  });

  scrollBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const section = document.querySelector(scrollBtn.getAttribute("href"));

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }
  });
};

export default modal;
