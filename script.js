import Countdown from "./countdown.js";

const happyNewYear = new Countdown("31 December 2022 23:59:59 GMT-0300");

setInterval(() => {
  days.textContent = happyNewYear.total.days;
  hours.textContent = happyNewYear.total.hours;
  minutes.textContent = happyNewYear.total.minutes;
  seconds.textContent = happyNewYear.total.seconds;
}, 1000);
