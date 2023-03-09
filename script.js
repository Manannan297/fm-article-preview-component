"use strict";

const btn = document.querySelector(".share__btn");
const panel = document.querySelector(".share__panel");

btn.addEventListener("click", function () {
  this.classList.toggle("active");
  panel.classList.toggle("active");
});
