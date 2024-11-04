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
  if (!event.target.classList.contains("color")) {
    event.target.style.backgroundColor = generateRadomColor();
    event.target.style.opacity = 0.1;
    event.target.classList.add("color");
  } else {
    const currentOpacity = +event.target.style.opacity;
    if (currentOpacity < 1) {
      event.target.style.opacity = currentOpacity + 0.1;
    }
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRadomColor() {
  const red = getRandomNumber(0, 255);
  const green = getRandomNumber(0, 255);
  const blue = getRandomNumber(0, 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

createGrid(DEFAULT_SIZE);
