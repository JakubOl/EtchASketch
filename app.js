const divContainer = document.querySelector(".container");
const colorInput = document.querySelector("#color");
const gridSizeInput = document.querySelector(".grid-size");
const resetWindow = document.querySelector(".header-input");
const clearBtn = document.querySelector(".clear");
let gridUnit = document.querySelectorAll(".grid-unit");
let gridRows = {};
let gridCols = {};
let gridSize = 10;
let padding = 5;
let unitColor = "blue";
let isDrawing = false;

function init() {
  for (let i = 1; i <= gridSize; i++) {
    gridRows[`${i}`] = document.createElement("div");
    gridRows[`${i}`].classList.add("grid-row");
    divContainer.appendChild(gridRows[`${i}`]);
    for (let j = 1; j <= gridSize; j++) {
      padding = (300 - gridSize) / gridSize;
      gridUnit = document.querySelectorAll(".grid-unit");
      gridCols[`${j}`] = document.createElement("div");
      gridCols[`${j}`].classList.add("grid-unit");
      gridRows[`${i}`].appendChild(gridCols[`${j}`]);
      gridCols[`${j}`].style.padding = `${padding}px`;
      gridCols[`${j}`].style.border = `1px grey solid`;
      gridCols[`${j}`].style.backgroundColor = `white`;
      gridCols[`${j}`].addEventListener("mouseover", unitChange);
    }
  }
  clearBtn.addEventListener("click", function () {
    gridUnit.forEach((el) => (el.style.backgroundColor = "white"));
  });
}

init();

document.addEventListener("mousedown", function () {
  if (colorInput.value) unitColor = colorInput.value;
  isDrawing = true;
});
document.addEventListener("mouseup", function () {
  isDrawing = false;
});

function unitChange(e) {
  if (isDrawing) e.target.style.backgroundColor = unitColor;
}

gridSizeInput.addEventListener("change", function () {
  divContainer.innerHTML = "";
  gridSizeInput.value < 100
    ? (gridSize = +gridSizeInput.value)
    : (gridSize = 100);
  gridRows = {};
  gridCols = {};
  init();
});
