let cells = document.querySelectorAll('.cell')
cells= Array.from(cells)

let currentPlayer = "X"

const winningCombos = [
    [0, 1, 2], //row
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], //column win
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], //CROSS
    [6, 4, 2],
]

// function checkForWinner(){
//     winningCombos.forEach(function(combination){
//         let check= combination.every(i =>cells[i].innerText.trim()==currentPlayer)
//         if (check){
//             alert(currentPlayer + "has won")
//         }
//     })
// }

function checkForWinner(){
    winningCombos.forEach(function(combination){
        let check= combination.every(i => cells[i].innerText.trim() == currentPlayer)
        if (check){
         //   alert(currentPlayer +' has won')
         highlightCells(combination)
        }
    })
}




function highlightCells(combination){
    combination.foreach(function(index){
        cells[index].classList.add('highlight')
    })
}


cells.forEach(function(cell){
    cell.addEventListener('click',function(){

        if (cell.innerText.trim() != "") return //if already cliekd 

        cell.innerText= currentPlayer
        checkForWinner()
        currentPlayer = currentPlayer =="X" ? "O": "X"
    })
})





// // add event listener to place "X" and "O"
// const boxes = document.querySelectorAll('.cell')
// let turn = "X"
// // add listener
// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].addEventListener('click', () => {
//         placeMark(boxes[i])
    
//     })
// }


// const placeMark = (cell) => {
//     if (cell.innerHTML === "") {
//         cell.innerHTML = turn
//         turn = turn === "X" ? "O" : "X"
//     }
// }

