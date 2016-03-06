/**
 * calculate the rank of a matrix
 * @param {Matrix} matrix
 * @return {Number} rank of the matrix
 */
export default function(m) {
  if (m.rank) {
    return m.rank;
  }
  var sum = 0;
  for (var i = 0; i < m.rows; i++) {
    sum += m.get([i, i]);
  }
  m.rank = sum;
  return sum;
}
