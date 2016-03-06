import Matrix from './matrix';

/**
 * multiply two matrices in the order that they are added
 * @param {Matrix} m1
 * @param {Matrix} m2
 * @returns {Matrix} a new matrix object with the product of the two matrices
 */
export default function multiply(m1, m2) {
  if (m1.cols !== m2.rows) {
    throw 'throw matrix size mismatch';
  }

  var out = [];

  for (var r = 0; r < m1.rows; r++) {
    out.push([]);
    for (var c = 0; c < m2.col; c++) {
      out[r][c] = 0;
      for (var i = 0; i < m2.col; i++) {
        out[r][c] += m1[r][i] * m2[i][c];
      }
    }
  }

  return new Matrix(out);
}
