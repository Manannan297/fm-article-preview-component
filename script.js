"use strict";

const btn = document.querySelector(".share__btn");
btn.addEventListener("click", togglePanel);

function togglePanel() {
  const panel = document.querySelector(".share__panel");
  panel.classList.toggle("active");
  btn.classList.toggle("active");

  if (panel.classList.contains("active")) {
    attachPanelEvents();
  } else {
    dettachPanelEvents();
  }
}

function attachPanelEvents() {
  document.addEventListener("keydown", handleEscape);
}

function dettachPanelEvents() {
  document.removeEventListener("keydown", handleEscape);
}

function handleEscape(event) {
  if (event.key === "Escape") togglePanel();
}
