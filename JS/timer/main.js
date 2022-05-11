const timer = document.querySelector(".timer");
const buttonStop = document.querySelector(".binstp");
const buttonStart = document.querySelector(".binstr");

let timerNum = 0;
let interval;

timer.innerHTML = timerNum;

buttonStart.addEventListener("click", () => {
  interval = setInterval(() => {
    showNumber();
  }, 1000);
  buttonStart.disabled = true;
});
buttonStop.addEventListener("click", () => {
  clearInterval(interval);
  buttonStart.disabled = false;
});

const showNumber = () => {
  timerNum = timerNum + 1;
  timer.innerHTML = timerNum;
};
