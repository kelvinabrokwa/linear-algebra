/* eslint no-shadow:[0] */
import test from 'tape';
import augment from '../src/augment';
import Matrix from '../src/matrix';
import Vector from '../src/vector';
import equals from '../src/equals';

test('augment', t => {
  let matrix = new Matrix([[1, 2], [3, 4]]);
  let vector = new Vector([6, 7]);
  let augExp = new Matrix([[1, 2, 6], [3, 4, 7]]);
  let augAct = augment(matrix, vector);
  t.ok(equals(augExp, augAct), 'augmented matrix is as expected');

  vector = new Vector([1, 2, 3]);
  t.throws(augment.bind(this, matrix, vector), 'augmeting with mismatching sizes throws');

  t.end();
});
