let fruits = [
  "🍎",
  "🍊",
  "🍎",
  "🍎",
  "🍌",
  "🍌",
  "🍉",
  "🍉",
  "🍊",
  "🍇",
  "🍇",
  "🍎",
  "🍊",
  "🍌",
  "🍊",
  "🍉",
  "🍉",
  "🍉",
  "🍉",
  "🍊",
  "🍊",
  "🍌",
  "🍌",
  "🍎",
];

let apples = [];
let oranges = [];
let bananas = [];
let grapes = [];
let watermelons = [];

let basEl = document.getElementById("basket");
basEl.innerHTML = fruits;

let sortEl = document.querySelector(".btn-sort");
let countEl = document.querySelector(".btn-count");
let delEl = document.querySelector(".btn-delete");

sortEl.addEventListener("click", function () {
  basEl.textContent = fruits.sort();
});

countEl.addEventListener("click", function () {
  basEl.textContent = fruits.length;
});

delEl.addEventListener("click", function () {
  basEl.textContent = [];
  fruits = [];
});

let disAppleEl = document.querySelector(".display-apple");
let disOrangeEl = document.querySelector(".display-orange");
let disBananaEl = document.querySelector(".display-banana");
let disGrapeEl = document.querySelector(".display-grape");
let disWatermelonEl = document.querySelector(".display-watermelon");
let displMsg = document.querySelector(".fruit-basket");

let sepAppleEl = document.querySelector(".btn-apple");
let sepOrangeEl = document.querySelector(".btn-oranges");
let sepBananaEl = document.querySelector(".btn-bananas");
let sepGrapeEl = document.querySelector(".btn-grapes");
let sepWatermelonEl = document.querySelector(".btn-watermelons");

sepAppleEl.addEventListener("click", function () {
  fruits.forEach((val) => {
    if (val === "🍎") {
      apples.push(val);
      disAppleEl.textContent = apples;
    }
  });
  if (fruits.length === 0) {
    disAppleEl.textContent = "No fruits!";
  }
  apples = [];
});

sepOrangeEl.addEventListener("click", function () {
  fruits.forEach((val) => {
    if (val === "🍊") {
      oranges.push(val);
      disOrangeEl.textContent = oranges;
    }
  });
  if (fruits.length === 0) {
    disOrangeEl.textContent = "No fruits!";
  }
  oranges = [];
});

sepBananaEl.addEventListener("click", function () {
  fruits.forEach((val) => {
    if (val === "🍌") {
      bananas.push(val);
      disBananaEl.textContent = bananas;
    }
  });
  if (fruits.length === 0) {
    disBananaEl.textContent = "No fruits!";
  }
  bananas = [];
});

sepGrapeEl.addEventListener("click", function () {
  fruits.forEach((val) => {
    if (val === "🍇") {
      grapes.push(val);
      disGrapeEl.textContent = grapes;
    }
  });
  if (fruits.length === 0) {
    disGrapeEl.textContent = "No fruits!";
  }
  grapes = [];
});

sepWatermelonEl.addEventListener("click", function () {
  fruits.forEach((val) => {
    if (val === "🍉") {
      watermelons.push(val);
      disWatermelonEl.textContent = watermelons;
    }
  });
  if (fruits.length === 0) {
    disWatermelonEl.textContent = "No fruits!";
  }
  watermelons = [];
});
