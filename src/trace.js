/**
 * calculate the trace of a matrix
 * @param {Matrix} matrix
 * @return {Number} trace of the matrix
 */
export default function(m) {
  if (m.trace) {
    return m.trace;
  }
  var sum = 0;
  for (var i = 0; i < m.rows; i++) {
    sum += m.get([i, i]);
  }
  m.trace = sum;
  return sum;
}
