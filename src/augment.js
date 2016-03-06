import Matrix from './matrix';

/**
 * Augment a matrix with a vector
 * @param {Matrix} m
 * @param {Vector} v
 * @returns {Matrix} the augmented matrix
 */
export default function augment(m, v) {
  if (matrix.rows !== v.size) {
    throw new Error('Matrix row size does not match vector size');
  }
  var out = [];
  for (var row = 0; row < m.rows; row++) {
    out.append([]);
    for (var col = 0; col < m.cols; col++) {
      out[row].append(m.get([row, col]));
    }
    out[row].append(v[row]);
  }
  return new Matrix(out);
}
