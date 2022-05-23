"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnsOpen = document.querySelectorAll(".show-modal");

const open = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const close = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpen.length; i++) {
  btnsOpen[i].addEventListener("click", open);
}

btnClose.addEventListener("click", close);

overlay.addEventListener("click", close);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      close();
    }
  }
});
