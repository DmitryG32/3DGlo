const calc = (price = 100) => {
  const calcBlock = document.querySelector(".calc-block");
  const calcType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");
  const total = document.getElementById("total");
  let step = 10;
  let newTotalValue = 0;

  const countCalc = () => {
    function totalValueAnimate() {
      if (newTotalValue < totalValue) {
        let interval = setInterval(() => {
          newTotalValue += step;
          total.textContent = newTotalValue;
          if (newTotalValue >= totalValue) {
            clearInterval(interval);
          }
        }, 0.1);
      } else {
        total.textContent = totalValue;
      }
      newTotalValue = +total.textContent;
    }

    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcType.value && calcSquare.value) {
      totalValue =
        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    } else {
      totalValue = 0;
    }

    totalValueAnimate();
    //total.textContent = totalValue;
  };

  calcBlock.addEventListener("input", (e) => {
    if (
      e.target === calcType ||
      e.target === calcSquare ||
      e.target === calcCount ||
      e.target === calcDay
    ) {
      countCalc();
    }
  });
};

export default calc;

/* function totalValueAnimate() {
  const step = 10;
  if (newTotalValue < totalValue) {
    let interval = setInterval(() => {
      newTotalValue += step;
      console.log(newTotalValue);
      total.textContent = newTotalValue;
      if (newTotalValue >= totalValue) {
        clearInterval(interval);
      }
    }, 1);
  }
  newTotalValue = +total.textContent;
} */
