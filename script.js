const grid = document.querySelector("#grid");

const GRID_SIZE = 16 * 16;

for (let i = 0; i < GRID_SIZE; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseenter", hoverEffect);
  grid.appendChild(square);
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
