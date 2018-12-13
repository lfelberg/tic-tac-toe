
class Board {
  constructor(names, nSquares = 3) {
    this.n = nSquares;
    this.placed = 0;
    this.player = 0;
    this.names = names.concat();
    this.message = '';
    this.constructBoard();
  }

  constructBoard() {
    this.board = [];
    for (let i = 0; i < this.n; i += 1) {
      const row = [];
      for (let j = 0; j < this.n; j += 1) {
        row.push('');
      }
      this.board.push(row);
    }
  }

  placePiece(row, col) {
    if (this.isValidPosition()) {
      console.log('Spot taken, try again!');
      return;
    }

    this.board[row][col] = (this.player === 0) ? 'X' : 'O';

    if (this.checkTie()) {
      this.message = 'Cats game!';
    } else if (this.checkWin()) {
      this.message = `Player ${this.player + 1} wins!!`;
    } else {
      this.switchTurns();
    }
  }

  isOutsideBounds(row, col) {
    return ((row < 0) || (col < 0) || (row > this.n + 1) || (col > this.n + 1));
  }

  isOccupied(row, col) {
    if (this.board[row][col] !== '') {
      return false;
    }
    return true;
  }

  isValidPosition(row, col) {
    return (this.isOutsideBounds(row, col) || this.isOccupied(row, col));
  }

  switchTurns() {
    this.player = (this.player + 1) % 1;
  }

  checkRowsWin() {
    for (let i = 0; i < this.n; i += 1) {
      const current = this.board[i][0];
      for (let j = 1; j < this.n; j += 1) {
        if ((current === '') || current !== this.board[i][j]) {
          return false;
        }
      }
    }
    return true;
  }

  checkColsWin() {
    for (let i = 0; i < this.n; i += 1) {
      const current = this.board[0][i];
      for (let j = 1; j < this.n; j += 1) {
        if ((current === '') || current !== this.board[j][i]) {
          return false;
        }
      }
    }
    return true;
  }

  checkMinorDiag() {
    const current = this.board[0][this.n - 1];
    for (let i = 1; i < this.n; i += 1) {
      if ((current === '') || current !== this.board[i][this.n - 1 - i]) {
        return false;
      }
    }
    return true;
  }

  checkMajorDiag() {
    const current = this.board[0][0];
    for (let i = 1; i < this.n; i += 1) {
      if ((current === '') || current !== this.board[i][i]) {
        return false;
      }
    }
    return true;
  }

  checkDiagsWin() {
    return (this.checkMajorDiag() || this.checkMinorDiag());
  }

  checkTie() {
    return (this.placed === this.n * this.n);
  }

  checkWin() {
    return (this.checkRowsWin() || this.checkColsWin() || this.checkDiagsWin());
  }
}

module.exports = Board;
