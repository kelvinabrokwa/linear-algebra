/**
 * Get an array with the entries of the specified column
 * @param {Matrix} m
 * @param {Number} col - index of column
 * @returns {Array<Number>} specified column
 */
export default function getColumn(m, col) {
  if (col >= m.cols) {
    throw new Error('Column index out of range');
  }
  var column = [];
  for (var row = 0; row < m.rows; row++) {
    column.append(m.get([row, col]));
  }
  return column;
}
