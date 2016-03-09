/* eslint no-shadow:0 */
import test from 'tape';
import equals from '../src/equals';
import Matrix from '../src/matrix';
import Vector from '../src/vector';

test('equals', t => {

  t.test('matrix', t => {
    let input1 = [[1, 2], [3, 4]];
    let input2 = [[5, 6], [7, 8]];
    let m1 = new Matrix(input1);
    let m2 = new Matrix(input1);
    let m3 = new Matrix(input2);
    t.true(equals(m1, m2), 'matrices with the same input are equal');
    t.true(equals(m2, m1), 'swapped matrices are still equal');
    t.false(equals(m1, m3), 'equals returns false for unequal matrices');
    t.end();
  });

  t.test('vector', t => {
    let input1 = [1, 2, 3, 4];
    let input2 = [5, 6, 7, 8];
    let v1 = new Vector(input1);
    let v2 = new Vector(input1);
    let v3 = new Vector(input2);
    t.true(equals(v1, v2), 'vectors with the same input are equal');
    t.true(equals(v2, v1), 'swapped vectors are still equal');
    t.false(equals(v1, v3), 'equals returns false for unequal vectors');
    t.end();
  });

  t.test('matrix-vector', t => {
    let vInput = [1, 2];
    let mInput = [[1, 2], [3, 4]];
    t.throws(equals.bind(this, new Vector(vInput), new Matrix(mInput)));
    t.end();
  });

});
