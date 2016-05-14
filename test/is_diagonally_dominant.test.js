import test from 'tape';
import isDiagonallyDominant from '../src/is_diagonally_dominant.js';
import Matrix from '../src/matrix.js';
import equals from '../src/equals';
import id from '../src/identity';

test('diagonally dominant', t => {
  let matrix = id(3);
  console.log(matrix.matrix);
  t.ok(matrix.isDiagonallyDominant(), 'a 3x3 identity matrix is diagonally dominant');
  t.end();
});
