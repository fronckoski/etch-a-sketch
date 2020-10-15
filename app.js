const mainGrid = document.getElementById("game-container");

//Creates grid based on users selection.
function createGrid(rows, cols) {
    mainGrid.style.setProperty('--grid-rows', rows);
    mainGrid.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
      const cell = document.createElement("div");
      mainGrid.appendChild(cell).className = "grid-item";
    };
};

//Clears the current grid back to the default "lightgray".
function clearGrid() {
    const gridItems = document.getElementsByClassName('grid-item');
    for (i = 0; i < gridItems.length; i++) {
        gridItems[i].style.backgroundColor = "lightgray";
    }
}

//This function adds event listeners to the divs in the grid box for color change.
function game(){
    const gridItems = document.getElementsByClassName('grid-item');
    const clearButton = document.getElementById('clear-button');

    clearButton.addEventListener('click', e => {
        for (i = 0; gridItems.length; i++) {
            gridItems[i].style.backgroundColor = "lightgray";
        }
    });

    for (i = 0; i < gridItems.length; i++) {
        gridItems[i].addEventListener('mouseover', e => {
            e.target.style.backgroundColor = "black";
        });
    }
}

createGrid(16, 16);
game();