/**
 * get the determinant of a square matrix
 * @returns {Number} the determinant of a square matrix
 */
export default function(matrix) {
    if (matrix.determinant) {
        return matrix.determinant;
    }
    if (!matrix.isSquare) {
        throw 'determinant is only defined for square matrices';
    }
}
