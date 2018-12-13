module.exports = (board) => {
  let maxLen = 0;
  const rows = [];
  board.forEach((row) => {
    rows.push(row.join(' | '));
    if (rows[row.length - 1].length > maxLen) {
      maxLen = rows[row.length - 1].length;
    }
  });
  let joiner = '';
  for (let i = 0; i < maxLen; i += 1) {
    joiner += '-';
  }
  joiner += '\n';

  return rows.join(joiner);
};
