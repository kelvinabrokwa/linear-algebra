import types from './types';

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
  if (m1.type !== m2.type) {
    throw new Error('Attempting to compare a vector with a matrix');
  }
  if (m1.type === types.MATRIX) {
    for (var row = 0; row < m1.rows; row++) {
      for (var col = 0; col < m1.cols; col++) {
        if (m1.get([row, col]) !== m2.get([row, col])) {
          return false;
        }
      }
    }
  }
  else {
    for (var i = 0; i < m1.size; i++) {
      if (m1.get(i) !== m2.get(i)) {
        return false;
      }
    }
  }
  return true;
}
