import test from 'tape';
import id from '../src/identity';
import Matrix from '../src/matrix';

test('identity matrix', t => {
  let matrix = id(3);
  let id3 =
  t.ok(matrix.equals(new Matrix([[1, 0, 0],
                                 [0, 1, 0],
                                 [0, 0, 1]])));
  t.end();
});
