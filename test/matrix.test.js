/* eslint no-shadow:[0] */
import test from 'tape';
import Matrix from '../src/matrix';

test('matrix', t => {

  t.test('constructor', t => {
    let input = [[1, 1], [2, 2]];
    let matrix = new Matrix(input);
    t.equal(matrix.rows, 2, 'correct number of rows');
    t.equal(matrix.cols, 2, 'correct number of columns');
    t.ok(matrix.isSquare, 'is a square matrix');
    input[0][0] = 2;
    t.equal(matrix.get([0, 0]), 1, 'mutations array do not affect matrix');
    matrix.set([0, 0], 3);
    t.equals(input[0][0], 2, 'mutating matrix does not affect original array');
    t.end();
  });

  t.test('get', t => {
    let input = [[1, 2], [3, 4]];
    let matrix = new Matrix(input);
    t.equal(matrix.get([0, 0]), 1);
    t.equal(matrix.get([0, 1]), 2);
    t.equal(matrix.get([1, 0]), 3);
    t.equal(matrix.get([1, 1]), 4);
    t.end();
  });

  t.test('set', t => {
    let input = [[1, 2], [3, 4]];
    let matrix = new Matrix(input);
    matrix.set([0, 0], 0);
    t.equal(matrix.get([0, 0]), 0);
    t.end();
  });

  t.test('clone', t => {
    let input = [[1, 2], [3, 4]];
    let matrix1 = new Matrix(input);
    let matrix2 = matrix1.clone();
    matrix1.set([0, 0], 0);
    t.equals(matrix2.get([0, 0]), 1, 'changing original matrix does not mutate clone');
    matrix2.set([0, 0], 5);
    t.equals(matrix1.get([0, 0]), 0, 'changing clone does not mutate original');
    t.end();
  });

  t.test('isSquare', t => {
    let input = [[1, 2], [3, 4]];
    let matrix = new Matrix(input);
    t.ok(matrix.isSquare, 'square matrix is square');
    input = [[1, 2]];
    matrix = new Matrix(input);
    t.false(matrix.isSquare, 'unsquare matrix is not square');
    t.end();
  });

});
