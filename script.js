const grid = document.querySelector("#grid");

const GRID_SIZE = 16 * 16;

for (let i = 0; i < GRID_SIZE; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  grid.appendChild(square);
}
