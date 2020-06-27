"use strict";

const clockContainer = document.querySelector(".clock");
const dateText = clockContainer.querySelector("#date");
const clockText = clockContainer.querySelector("#clock");
const background = clockContainer.querySelector("#background");

// Get day, date, month
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
  dateText.innerHTML = `${days[day]} ${date} ${months[month]}`;
};

// Get hour, minutes, seconds
const getTime = () => {
  const time = new Date();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  return { hour: hour, minutes: minutes, seconds: seconds };
};

const writeTime = () => {
  const time = getTime();
  const hour = time.hour;
  const minutes = time.minutes;
  const seconds = time.seconds;
  clockText.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  if (hour === 0 && minutes === 0 && seconds === 0) location.reload();
};

// Get time progress value
const getProgressValue = () => {
  const time = getTime();
  const hour = time.hour;
  const minutes = time.minutes;
  const seconds = time.seconds;
  const progressValue = clockContainer.querySelector(".progress__value");
  const secondsMinute = 60;
  const minutesHour = 60;
  const hoursDay = 24;
  const secondsDay = secondsMinute * minutesHour * hoursDay;
  const secondsCurrent =
    seconds + secondsMinute * minutes + secondsMinute * minutesHour * hour;
  const progressValueCurrent = (secondsCurrent / secondsDay) * 100;

  progressValue.style.width = `${progressValueCurrent}%`;

  // background
  if (6 <= hour && hour < 21) {
    // day
    background.setAttribute("class", "clock__background--light");
  } else {
    // night
    background.setAttribute("class", "clock__background--dark");
  }
  const className = `.${background.className}`;
  const clockBackground = clockContainer.querySelector(className);
  const backgroundOpacity = clockBackground.style.opacity;
  if (6 <= hour && hour < 21) {
    // day
    dateText.classList.remove("date--white");
    clockText.classList.remove("clock--white");
  } else {
    // night
    dateText.classList.add("date--white");
    clockText.classList.add("clock--white");
  }
};

function init() {
  getDay();
  const intervID_time = setInterval(writeTime, 1000);
  const intervID_progress = setInterval(getProgressValue, 1000);
}

init();
