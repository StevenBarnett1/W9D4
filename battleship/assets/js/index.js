import Board from "./board.js";

let board = new Board(); // creates a new game board
let jsGrid = board.grid

let removeSquareClickListeners = () => {
    let squares = document.querySelectorAll("#board > div.square")
    for(let i =0;i<squares.length;i++){
        squares[i].removeEventListener("click",squareClickHandler)
    }
}

let squareClickHandler = (event) => {
    let [x,y] = event.target.id.split("/")
    if(jsGrid[x][y]) {
        event.target.style.backgroundColor = "green"
        event.target.removeEventListener("click",squareClickHandler)
    }
    else event.target.style.backgroundColor = "red"
    event.target.innerText = board.makeHit(x,y)
    console.log(board.numRemaining)
    if(board.isGameOver()) {
        alert("You win, Game Over!")
        removeSquareClickListeners()
    }
}

let createHtmlGrid = () => {

    let grid = document.createElement("div")
    grid.id = "board"
    createSquares(grid)
    document.querySelector("h1").after(grid)
}

let createSquares = (grid) => {
    let x = 0
    let y = 0
    for(let i = 0;i<81;i++){
        let square = document.createElement("div")
        square.classList.add("square")
        square.id = `${x}/${y}`
        square.addEventListener("click",squareClickHandler)
        square.innerText = jsGrid[x][y]
        grid.append(square)
        if(y===8){
            y=0
            x++
        } else y++
    }
}

let resetClickHandler = (event) => {
    window.location.reload()
}


let createResetButton = () => {
    let container = document.createElement("div")
    container.id = "reset-container"

    let reset = document.createElement("button")
    reset.classList.add("reset")
    reset.innerText = "Reset"

    reset.addEventListener("click",resetClickHandler)
    container.append(reset)
    document.getElementById("board").after(container)

}

window.addEventListener("DOMContentLoaded",event => {
    createHtmlGrid()
    createResetButton()
})
