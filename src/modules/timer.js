const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");
  let timerDays;

  const createDays = () => {
    const days = document.createElement("span");
    const newColon = document.createElement("span");
    let timerList = document.querySelector(".timer-numbers");
    let firstChild = timerList.firstElementChild;

    days.id = "timer-days";
    days.textContent = "00";
    timerList.insertBefore(days, firstChild);

    newColon.textContent = " : ";
    timerList.insertBefore(newColon, firstChild);

    return days;
  };

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();

    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, days, hours, minutes, seconds };
  };

  const updataClock = () => {
    let getTime = getTimeRemaining();

    if (getTime.timeRemaining < 0) {
      clearInterval(interval);
      timerDays.textContent = "00";
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
      return;
    }

    const fDays = getTime.days < 10 ? "0" + getTime.days : getTime.days;
    const fHours = getTime.hours < 10 ? "0" + getTime.hours : getTime.hours;
    const fMinutes =
      getTime.minutes < 10 ? "0" + getTime.minutes : getTime.minutes;
    const fSeconds =
      getTime.seconds < 10 ? "0" + getTime.seconds : getTime.seconds;

    timerDays.textContent = fDays;
    timerHours.textContent = fHours;
    timerMinutes.textContent = fMinutes;
    timerSeconds.textContent = fSeconds;
  };

  timerDays = createDays();
  updataClock();
  const interval = setInterval(updataClock, 1000);
};

export default timer;
