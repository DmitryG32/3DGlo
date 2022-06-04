const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();

    let timeRemaining = (dateStop - dateNow) / 1000;
    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, hours, minutes, seconds };
  };

  const updataClock = () => {
    let getTime = getTimeRemaining();

    const fHours = getTime.hours < 10 ? "0" + getTime.hours : getTime.hours;
    const fMinutes =
      getTime.minutes < 10 ? "0" + getTime.minutes : getTime.minutes;
    const fSeconds =
      getTime.seconds < 10 ? "0" + getTime.seconds : getTime.seconds;

    timerHours.textContent = fHours;
    timerMinutes.textContent = fMinutes;
    timerSeconds.textContent = fSeconds;

    if (getTime.timeRemaining < 0) {
      clearInterval(interval);
      timerDays.textContent = "00";
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
    }
  };

  updataClock();
  const interval = setInterval(updataClock, 1000);
};

export default timer;
