"use strict";

const clockContainer = document.querySelector(".clock");
const DateText = clockContainer.querySelector("#date");
const clockText = clockContainer.querySelector("#clock");

const getDay = () => {
  const time = new Date();
  const day = time.getDay();
  const date = time.getDate();
  const month = time.getMonth();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  DateText.innerHTML = `${days[day]} ${date} ${months[month]}`;
};

const getTime = () => {
  const time = new Date();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  clockText.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  if (hour === 0 && minutes === 0 && seconds === 0) location.reload();
};

function init() {
  getDay();
  const intervID = setInterval(getTime, 1000);
}

init();
