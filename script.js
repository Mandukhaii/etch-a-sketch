function createDivs(num) {
  //container where the divs should go in
  const container = document.querySelector(".container");

  //using a single loop instead of double for simplicity
  for (i = 0; i < num * num; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    //cell.textContent = i;
    cell.style.width = 500 / num + "px";
    cell.style.height = 500 / num + "px";
    container.appendChild(cell);

    // Add event listener to change color on hover
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "pink";
    });
  }
}

//initial grid size 16x16
createDivs(16);

function createGrid() {
  let gridSize = prompt("Enter new grid size, max is 100:");
  gridSize = parseInt(gridSize);

  // Check if gridSize is a valid number
  if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
    alert("Please enter a valid number between 0-100.");
    return;
  }

  // Clear current grid
  const container = document.querySelector(".container");
  container.textContent = "";

  // Create new grid
  createDivs(gridSize);
}

function clear() {
  // Clear current grid
  const container = document.querySelector(".container");
  const cells = container.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "";
  });
}

// Add event listener to a button to prompt for a new grid size
const button1 = document.querySelector(".change");
button1.addEventListener("click", createGrid);

// Add event listener to a button to clear the grid
const button2 = document.querySelector(".clear");
button2.addEventListener("click", clear);
