/**
 * Checks matrices, entry-wise, for equality
 * @param {Matrix} m1
 * @param {Matrix} m2
 * @returns {Boolean} true if the matrices are equal
 */
export default function equals(m1, m2) {
  if (m1.rows !== m2.rows || m1.cols !== m2.cols) {
    throw new Error('matrix size mismatch, cannot compare');
  }
  for (var row = 0; row < m1.rows; row++) {
    for (var col = 0; col < m1.cols; col++) {
      if (m1.get([row, col]) !== m2.get([row, col])) {
        return false;
      }
    }
  }
  return true;
}
