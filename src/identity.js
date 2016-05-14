import Matrix from './matrix'

/**
 * Creates an nxn identity matrix
 * @param {Number} n
 * @returns {Matrix} out
 */
export default function identity(n) {
  var out = [];
  for (var row = 0; row < n; row++) {
    out.push([]);
    for (var col = 0; col < n; col++) {
      out[row].push(row === col ? 1 : 0);
    }
  }
  return new Matrix(out);
}
