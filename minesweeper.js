document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [{
      row: 0,
      col: 0,
      isMine: randomMines(),
      hidden: true,
    },
    {
      row: 0,
      col: 1,
      isMine: randomMines(),
      hidden: true,
    },
    {
      row: 0,
      col: 2,
      isMine: randomMines(),
      hidden: true,
    },
    {
      row: 1,
      col: 0,
      isMine: randomMines(),
      hidden: true,
    },
    {
      row: 1,
      col: 1,
      isMine: randomMines(),
      hidden: true,
    },
    {
      row: 1,
      col: 2,
      isMine: randomMines(),
      hidden: true,
    },
    {
      row: 2,
      col: 0,
      isMine: randomMines(),
      hidden: true,
    },
    {
      row: 2,
      col: 1,
      isMine: randomMines(),
      hidden: true,
    },
    {
      row: 2,
      col: 2,
      isMine: randomMines(),
      hidden: true,
    },
  ],
};

function startGame() {
  // Don't remove this function call: it makes the game work!
  // Create a for loop that loops through the contents of board.cells
  for (var i = 0; i < board.cells.length; i++) {
    // console.log(board.cells[i]);
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
    // Create an event listener and pass in checkForWin
    document.addEventListener('click', checkForWin);
    document.addEventListener('contextmenu', checkForWin);
  }
  lib.initBoard();
}

// console.log(board)

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {
  // Create a loop through all the board cells
  for (var i = 0; i < board.cells.length; i++) {
    // If there is a mine and it hasn't been flagged exit loop
    if (board.cells[i].isMine === true && board.cells[i].isMarked === false)
      return
    // if every mine is marked but there are still cells hidden exit loop
    if (board.cells[i].isMine === false && board.cells[i].hidden === true)
      return
  }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  lib.displayMessage('You win!');
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  let mines = 0;

  // Create loop for surrounding to add the count if its a mine cells.isMine
  for (var i = 0; i < surrounding.length; i++) {
      if(surrounding[i].isMine === true){
      mines++;
    }
  };
  // Return count
  return mines;
}

// Need to create a function that randomises the location of mines and returns a true/false statement in order for the checkForWin function to work.
function randomMines() {
  var num = Math.random();
  if (num < 0.4) {
    return true;
  }
  return false;
}

console.log(board)
