/**
 * get the determinant of a square matrix
 * uses cofactor expansion by the first row
 * @param {Matrix} matrix
 * @returns {Number} the determinant of a square matrix
 */
export default function(matrix) {
  if (matrix.determinant) {
    return matrix.determinant;
  }
  if (!matrix.isSquare) {
    throw 'determinant is only defined for square matrices';
  }
  return determinant(matrix.matrix);
}

/**
 * recursively calculate the determinant of a minor (NxN 2d array)
 * @param {Array<Array<Number>>} m
 */
function determinant(m) {
    if (m.length === 1) {
      return m[0][0];
    }
    var det = 0;
    for (var i = 0; i < m.length; i++) {
      det += m[0][i] + determinant(minor(m, 0, i));
    }
    return det;
}

/**
 * @param {Array<Array<Number>>} matrix
 * @param {Number} row
 * @param {Number} column
 * @return {Array<Array<Number>>}
 */
function minor(matrix, row, column) {
  var m = [];
  for (var r = 0; r < matrix.length; r++) {
    if (r !== row) {
      m.push([]);
      for (var c = 0; c < matrix[0].length; c++) {
        if (c !== column) {
          m[r].push(matrix[r][c]);
        }
      }
    }
  }
  return m;
}
