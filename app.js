const mainGrid = document.getElementById("game-container");
const colorSelection = document.getElementById('color-selector');
const penSelection = document.getElementById('pentype-selector');
var colorSel = 'black';
var penSel = 'mouseover';

//Creates grid based on users selection.
function createGrid(rows, cols) {
    mainGrid.style.setProperty('--grid-rows', rows);
    mainGrid.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
      const cell = document.createElement("div");
      mainGrid.appendChild(cell).className = "grid-item";
    };
};

//Clears the current grid by removing all childNodes from mainGrid.
function clearGrid() {
    const gridItems = document.getElementsByClassName('grid-item');
    while (gridItems.length > 0){
        gridItems[0].parentNode.removeChild(gridItems[0]);
    }
}

//This function adds event listeners to the divs in the grid box for color change.
function game(penColor, penType){
    const gridItems = document.getElementsByClassName('grid-item');
    const clearButton = document.getElementById('clear-button');

    clearButton.addEventListener('click', e => {
        for (i = 0; gridItems.length; i++) {
            gridItems[i].style.backgroundColor = "lightgray";
        }
    });

    for (i = 0; i < gridItems.length; i++) {
        gridItems[i].addEventListener(penType, e => {
            e.target.style.backgroundColor = penColor;
        });
    };
};

//This event listener restarts the game function with the new color selected
colorSelection.addEventListener('change', e => {
    colorSel = e.target.value;
    clearGrid();
    createGrid(16, 16);
    game(colorSel, penSel);
});
penSelection.addEventListener('change', e => {
    penSel = e.target.value;
    clearGrid();
    createGrid(16, 16);
    game(colorSel, penSel);
});

createGrid(16, 16);
game(colorSel, penSel);