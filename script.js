import Countdown from "./countdown.js";

const happyNewYear = new Countdown("31 December 2022 23:59:59 GMT-0300");

const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

setInterval(() => {
  days.innerText = happyNewYear.total.days;
  hours.innerText = happyNewYear.total.hours;
  minutes.innerText = happyNewYear.total.minutes;
  seconds.innerText = happyNewYear.total.seconds;
}, 1000);
