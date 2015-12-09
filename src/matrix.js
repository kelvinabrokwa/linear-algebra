import multiply from './multiply';
import determinant from './determinant';
import transpose from './transpose';
import rank from './rank';

/**
 * Matrix object
 * @param {Array} matrix
 */
export default class Matrix {

    constructor(matrix) {
        this.matrix = JSON.parse(JSON.stringify(matrix)); // deep copy
        this.rows = this.matrix.length;
        this.cols = this.matrix[0].length;
        this.isSquare = this.rows === this.cols;
    }

    /**
     * post multiplication
     * @param {Matrix} matrix
     * @returns {Matrix} a new matrix object with the product of the two matrices
     */
    multiply(matrix) {
        return this.preMultiply(this, matrix);
    }

    /**
     * pre multiplication
     * @param {Matrix} matrix
     * @returns {Matrix} a new matrix object with the product of the two matrices
     */
    preMultiply(matrix) {
        return multiply(this, matrix);
    }

    /**
     * post multiplication
     * @param {Matrix} matrix
     * @returns {Matrix} a new matrix object with the product of the two matrices
     */
    postMultiply(matrix) {
        return multiply(matrix, this);
    }

    /**
     * return an array with the entries of a column
     * @param {Number} col
     * @returns {Vector} the column located at the given index
     */
    getColumn(col) {
        if (col >= this.cols) {
            throw 'column index out of bounds';
        }
        var column = [];
        for (var row = 0; row < this.matrix.length; row++) {
            column.push(this.matrix[row][col]);
        }
        return column;
    }

    /**
     * calculate the transpose of the matrix
     * @returns {Matrix} a new matrix
     */
    transpose() {
        return transpose(this);
    }

    /**
     * get the determinant of the matrix
     * @returns {Number} the determinant of a square matrix
     */
    determinant() {
        return determinant(this);
    }

    /**
     * get the rank of the matrix
     * @returns {Number} rank of the matrix
     */
    rank() {
        return rank(this);
    }
}
