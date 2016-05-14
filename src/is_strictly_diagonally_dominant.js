/**
 * Checks if a matrix is diagonally dominant
 * @param {Matrix} m
 * @returns {Boolean} true if the matrix is diagonally dominant
 */
export default function isDiagonallyDominant(m) {
  if (!m.isSquare) {
    throw new Error('Matrix must be square');
  }
  if (m.isDiagonallyDominant) {
    return m.isDiagonallyDominant;
  }
  var sum = 0;
  for (var row = 0; row < m.rows; row++) {
    for (var col = 0; col < m.cols && col !== row; col++) {
      sum += m.get([row, col]);
    }
    if (m.get([row, row]) <= sum) {
      m.isDiagonallyDominant = false;
      return false;
    }
    sum = 0;
  }
  m.isDiagonallyDominant = true;
  return true;
}

