const readline = require('readline');
const Board = require('./src/Board.js');
const BoardView = require('./src/BoardView.js');

// get player names, get board size
// construct BoardView, Board
// While the game is not over, keep prompting for inputs
// when game is over, user can input R to reset game

const setGame = () => {
  const names = [];
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Enter P1 name > ', (name1) => {
    names.push(name1);
  });
  rl.question('Enter P2 name > ', (name2) => {
    names.push(name2);
  });

  const board = new Board(names);
};

setGame();
