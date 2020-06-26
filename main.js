"use strict";

const clockContainer = document.querySelector(".clock");
const clockText = clockContainer.querySelector("p");

const getTime = () => {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockText.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
};

function init() {
  const intervID = setInterval(getTime, 1000);
}

init();
