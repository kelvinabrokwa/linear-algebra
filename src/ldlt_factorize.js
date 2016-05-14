import identity from './identity';

/**
 * produces and LDL^t factorization
 * @param {Matrix} m
 * @returns {Object} out
 * @returns {Matrix} L
 * @returns {Matrix} D
 */

export default function LDLtFactorize(m) {
  var L = idetity(m.rows);
  var v = [];
  for (var i = 0; i < m.rows; i++) {
  }
}
