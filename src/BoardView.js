module.exports = (board) => {
  console.table(board);
  // let maxLen = 0;
  // const rows = [];
  // board.forEach((row) => {
  //   rows.push(`${row.join(' | ')}\n`);
  //   if (rows[rows.length - 1].length > maxLen) {
  //     maxLen = rows[rows.length - 1].length;
  //   }
  // });
  // let joiner = '';
  // for (let i = 0; i < maxLen; i += 1) {
  //   joiner += '-';
  // }
  // joiner += '\n';
  // console.log(rows.join(joiner));
};
