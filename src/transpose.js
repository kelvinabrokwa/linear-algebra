import Matrix from './matrix';

/**
 * calculate the transpose a matrix
 * @param {Matrix} matrix
 * @return {Matrix} the transpose of the matrix
 */
export default function(matrix) {
    var m = [];
    for (var col = 0; col < matrix.cols; col++) {
        m.append(matrix.getColumn(col));
    }
    return new Matrix(m);
}
