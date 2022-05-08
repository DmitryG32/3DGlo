const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const modalContent = modal.querySelector(".popup-content");
  const menuActive = document.querySelector("menu");
  const scrollBtn = document.querySelector("a");
  const body = document.querySelector("body");
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

  const toggleMenu = () => {
    body.addEventListener("click", (e) => {
      if (e.target.closest(".menu")) {
        menuActive.classList.add("active-menu");
      } else if (e.target.matches("menu a[href]")) {
        event.preventDefault();
        const section = document.querySelector(e.target.getAttribute("href"));
        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "center",
          });
        }
      } else if (!e.target.classList.contains("active-menu")) {
        menuActive.classList.remove("active-menu");
      }
    });
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";

      if (document.documentElement.clientWidth >= 768) {
        modalAnimate();
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
