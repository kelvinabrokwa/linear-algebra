/**
 * Checks if a matrix is diagonal
 * @param {Matrix} m
 * @returns {Boolean} true if the matrix is diagonal
 */
export default function isDiagonal(m) {
  if (!m.isSquare) {
    throw new Error('Matrix must be square');
  }
  if (m.isDiagonal) {
    return m.isDiagonal;
  }
  for (var row = 0; row < m.rows; row++) {
    for (var col = 0; col < m.cols && col !== row; col++) {
      if (m.get([row, col]) !== 0) {
        m.isDiagonal = false;
        return false;
      }
    }
  }
  m.isDiagonal = true;
  return true;
}
