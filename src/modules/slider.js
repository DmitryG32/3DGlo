const slider = () => {
  const sliderBlock = document.querySelector(".portfolio-content");
  const slides = document.querySelectorAll(".portfolio-item");
  const portfolioDots = document.querySelector(".portfolio-dots");
  const timeInterval = 2000;
  const newArrDots = [];

  let currentSlide = 0;
  let interval;
  let dots;

  const createDots = () => {
    for (let i = 0; i < slides.length; i++) {
      const newDot = document.createElement("li");
      newDot.classList.add("dot");
      newArrDots[i] = newDot;
      portfolioDots.append(newArrDots[i]);
    }
    newArrDots[0].classList.add("dot-active");
    dots = document.querySelectorAll(".dot");
  };

  const prevSlide = (elems, index, srtClass) => {
    elems[index].classList.remove(srtClass);
  };

  const nextSlide = (elems, index, srtClass) => {
    elems[index].classList.add(srtClass);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, "portfolio-item-active");
    prevSlide(dots, currentSlide, "dot-active");
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    nextSlide(slides, currentSlide, "portfolio-item-active");
    nextSlide(dots, currentSlide, "dot-active");
  };

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };

  const stoptSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener("click", (e) => {
    e.preventDefault();

    if (!e.target.matches(".dot, .portfolio-btn")) {
      return;
    }

    prevSlide(slides, currentSlide, "portfolio-item-active");
    prevSlide(dots, currentSlide, "dot-active");

    if (e.target.matches("#arrow-right")) {
      currentSlide++;
    } else if (e.target.matches("#arrow-left")) {
      currentSlide--;
    } else if (e.target.classList.contains("dot")) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, "portfolio-item-active");
    nextSlide(dots, currentSlide, "dot-active");
  });

  sliderBlock.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target.matches(".dot, .portfolio-btn")) {
        stoptSlide();
      }
    },
    true
  );

  sliderBlock.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target.matches(".dot, .portfolio-btn")) {
        startSlide(timeInterval);
      }
    },
    true
  );

  createDots();
  startSlide(timeInterval);
};

export default slider;
