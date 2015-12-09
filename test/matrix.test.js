/* eslint no-shadow:[0] */
import test from 'tape';
import Matrix from '../matrix';

test('matrix', t => {

    t.test('constructor', t => {
        var matrix = new Matrix([[1, 1], [2, 2]]);
        t.equal(matrix.rows, 2, 'correct number of rows');
        t.equal(matrix.cols, 2, 'correct number of columns');
        t.ok(matrix.isSquare, 'is a square matrix');
    });

});
