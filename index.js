const readline = require('readline');
const Board = require('./src/Board.js');
const boardView = require('./src/BoardView.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (q, cb) => {
  rl.question(q, (res) => {
    cb(res);
  });
};

const parsePosition = pos => pos.split(',').map(s => Number(s) - 1);

const parsePlaceView = (pos, board) => {
  const position = parsePosition(pos);
  const isDone = board.placePiece(...position);
  boardView(board.getBoard());
  if (isDone) {
    rl.close();
  } else {
    askQuestion(`Place a piece, ${board.getPlayer()} (row, col) > `,
      posNext => parsePlaceView(posNext, board));
  }
};

const names = [];
const runGame = () => {
  const board = new Board(names);
  boardView(board.getBoard());
  askQuestion(`Place a piece, ${board.getPlayer()} (row, col) > `,
    pos => parsePlaceView(pos, board));
};

const getName = (ct = 1, cb) => {
  askQuestion(`Enter P${ct} name > `, (name) => {
    names.push(name);
    cb();
  });
};

const setGame = () => {
  getName(1, () => {
    getName(2, runGame);
  });
};

setGame();
