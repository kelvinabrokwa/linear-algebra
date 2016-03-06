import rank from './rank';
import isSPD from './is_spd';
import multiply from './multiply';
import transpose from './transpose';
import getColumn from './get_column';
import rowReduce from './row_reduce';
import isDiagonal from './is_diagonal';
import determinant from './determinant';
import isDiagonallyDominant from './is_diagonally_dominant';

/**
 * Matrix object
 * @param {Array<Array<Number>>} matrix
 */
export default class Matrix {

    constructor(matrix) {
      this.matrix = JSON.parse(JSON.stringify(matrix)); // deep copy
      this.rows = this.matrix.length;
      this.cols = this.matrix[0].length;
      this.isSquare = this.rows === this.cols;
    }

    /**
     * Get the element at the specified entry
     * @param {Array<Number>} coordinates
     * @returns {Number}
     */
    get(c) {
      return this.matrix[c[0]][c[1]];
    }

    /**
     * Clone the matrix
     * @returns {Matrix} a deep clone of the matrix
     */
    clone() {
      return new Matrix(this.matrix);
    }

    /**
     * Check if the matrix is square
     * @returns {Boolean} true if the matrix is square
     */
    isSquare() {
      return this.isSquare;
    }

    /**
     * Post multiplication
     * @param {Matrix} matrix
     * @returns {Matrix} a new matrix object with the product of the two matrices
     */
    multiply(matrix) {
      return this.preMultiply(this, matrix);
    }

    /**
     * Pre multiplication
     * @param {Matrix} matrix
     * @returns {Matrix} a new matrix object with the product of the two matrices
     */
    preMultiply(matrix) {
      return multiply(this, matrix);
    }

    /**
     * Post multiplication
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
      return getColumn(this, col);
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

    /**
     * Checks if a matrix is Symmetric Positive Definite
     * @returns {Boolean} true if the matrix is SPD
     */
    isSPD() {
      return isSPD(this);
    }

    /**
     * Checks if a matrix is diagonally dominant
     * @returns {Boolean} true if the matrix is diagonally dominant
     */
    isDiagnoallyDominant() {
      return isDiagonallyDominant(this);
    }

    /**
     * Checks if a matrix is a diagonal
     * @returns {Boolean} true if the matrix is diagonal
     */
    isDiagonal() {
      return isDiagonal(this);
    }

    /**
     * Reduces the matrix to row-echelon form
     * @returns {Matrix} row reduced matrix
     */
    rowReduce() {
      return rowReduce(this);
    }
}
