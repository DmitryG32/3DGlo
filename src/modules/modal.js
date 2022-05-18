import { modalAnimate, animate } from "./helpers";

const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const modalContent = modal.querySelector(".popup-content");
  const menuActive = document.querySelector("menu");
  const scrollBtn = document.querySelector("a");
  const body = document.querySelector("body");
  let countLeft = 0;

  const toggleMenu = () => {
    body.addEventListener("click", (e) => {
      if (e.target.closest(".menu")) {
        menuActive.classList.add("active-menu");
        console.log(e.target);
      } else if (e.target.matches("menu [href]")) {
        event.preventDefault();
        const section = document.querySelector(e.target.getAttribute("href"));
        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "center",
          });
        }
        console.log(e.target);
      } else if (
        !e.target.classList.contains("active-menu") &&
        !e.target.matches("menu li")
      ) {
        menuActive.classList.remove("active-menu");
        console.log(e.target);
      }
    });
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";

      /* if (document.documentElement.clientWidth >= 768) {
        modalAnimate(countLeft, modalContent);
      } */
      if (document.documentElement.clientWidth >= 768) {
        animate({
          duration: 200,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modalContent.style.left = 39 * progress + "%";
          },
        });
      }
    });
  });

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      modal.style.display = "none";
    }
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

  toggleMenu();
};

export default modal;
