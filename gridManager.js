const container = document.querySelector("#containerGrid");

let defaultNumber = 16;
let defaultGridArea = defaultNumber * defaultNumber;
//function for creating grid of any size
function defaultGrid(defaultGridArea) {
    for (let r = 0; r < defaultGridArea; r++) {
        const gridRowColumn = document.createElement('div');
        gridRowColumn.classList.add('gridRowColumn');
        container.appendChild(gridRowColumn);
    }
    container.style.gridTemplateRows = `repeat(${defaultNumber}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${defaultNumber}, 1fr)`;
    gridHover();
}

//function for grid changing color on hover using forEach method
function gridHover() {
    let rowColumn = document.querySelectorAll(".gridRowColumn");
    rowColumn.forEach(function(cell){
        cell.addEventListener("mouseenter", function() {
            cell.style.backgroundColor = "black";
    })
})
}

//function for button when user picks color
function userHoverColor() {
    var userColor = prompt();
    let defaultGrid = document.querySelectorAll(".gridRowColumn");
    defaultGrid.forEach(function(cell){
        cell.addEventListener("mouseenter", function() {
            cell.style.backgroundColor = `${userColor}`;
    })
})
}

//function for reset button and to create new grid
function resetButton() {
    document.querySelectorAll(".gridRowColumn").forEach(function(cells) {
        cells.remove();
    })
    let userInput = prompt("Enter grid size: (eg. 16 will make a 16x16 grid)");
    let userGridSize = userInput * userInput;
    for (u = 0; u < userGridSize; u++) {
        const gridRowColumn = document.createElement("div");
        gridRowColumn.classList.add("gridRowColumn");
        container.appendChild(gridRowColumn);
        container.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
    }   gridHover();
}

//function for eraser button, just changes hover color to white
function eraserButton() {
    let rowColumn = document.querySelectorAll(".gridRowColumn");
    rowColumn.forEach(function(cell){
        cell.addEventListener("mouseenter", function() {
            cell.style.backgroundColor = "white";
    })
})
}

/* function for rainbow mode hover, 
changes color to random rgb value each time mouse hover event is called */
function rainbowButton() {
    let rowColumn = document.querySelectorAll(".gridRowColumn");
    rowColumn.forEach(function(cell){
        cell.addEventListener("mouseenter", function() {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            cell.style.backgroundColor = "rgb(" + r + "," + g + "," + b +")";
    })
})
}



