const grid = document.querySelector("#grid");
const changeSizeButton = document.querySelector("#change-size-button");

const MIN_SIZE = 2;
const MAX_SIZE = 100;
const DEFAULT_SIZE = 16;

changeSizeButton.addEventListener("click", (event) => {
  const size = +prompt(`Size (min = ${MIN_SIZE}; max = ${MAX_SIZE}):`);
  console.log(size);

  if (isNaN(size) || size < MIN_SIZE || size > MAX_SIZE) {
    alert("Invalid size!");
  } else {
    grid.innerHTML = "";
    createGrid(size);
  }
});

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style["flex-basis"] = `calc(100% / ${size})`;
    square.addEventListener("mouseenter", hoverEffect);
    grid.appendChild(square);
  }
}

function hoverEffect(event) {
  event.target.style.backgroundColor = generateRadomColor();
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRadomColor() {
  const red = getRandomNumber(0, 255);
  const green = getRandomNumber(0, 255);
  const blue = getRandomNumber(0, 255);
  const alpha = Math.random() * 1;

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

createGrid(DEFAULT_SIZE);
