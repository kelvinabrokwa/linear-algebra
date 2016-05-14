import types from './types';
import trace from './trace';
import isSPD from './is_spd';
import equals from './equals';
import multiply from './multiply';
import transpose from './transpose';
import getColumn from './get_column';
import rowReduce from './row_reduce';
import isDiagonal from './is_diagonal';
import determinant from './determinant';
import isDiagonallyDominant from './is_diagonally_dominant';
import isStrictlyDiagonallyDominant from './is_strictly_diagonally_dominant';

/**
 * Matrix object
 * @param {Array<Array<Number>>} matrix
 */
export default class Matrix {

  constructor(matrix) {
    this.matrix = JSON.parse(JSON.stringify(matrix)); // deep copy
    this.type = types.MATRIX;
    this.rows = this.matrix.length;
    this.cols = this.matrix[0].length;
    this.length = this.rows;
    this.width = this.cols;
    this.size = [this.rows, this.cols];
    this.isSquare = this.rows === this.cols;
  }

  /**
   * Get the element at the specified entry
   * @param {Array<Number>} coordinates
   * @returns {Number}
   */
  get(c) {
    if (c[0] >= this.rows || c[1] >= this.cols) {
      throw new Error('Index out of bounds: your matrix is ' + this.rows + 'x' + this.cols);
    }
    return this.matrix[c[0]][c[1]];
  }

  /**
   * Set the element at the specified entry
   * @param {Array<Number>} coordinates
   * @returns {Matrix} this
   */
  set(c, val) {
    if (c[0] >= this.rows || c[1] >= this.cols) {
      throw new Error('Index out of bounds');
    }
    this.matrix[c[0]][c[1]] = val;
    return this;
  }

  /**
   * Clone the matrix
   * @returns {Matrix} a deep clone of the matrix
   */
  clone() {
    return new Matrix(this.matrix);
  }

  /**
   * checks for entry-wise equality
   * @param {Matrix} m
   * @returns {Boolean} true if the matrix provided is equal to this
   */
  equals(m) {
    return equals(this, m);
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
   * get the trace of the matrix
   * @returns {Number} trace of the matrix
   */
  trace() {
    return trace(this);
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
  isDiagonallyDominant() {
    if (!this.isSquare) {
      throw new Error('Diagonal dominance is only defined on square matrices');
    }
    return isDiagonallyDominant(this);
  }

  /**
   * Checks if the matrix is strictly diagonally dominant
   * @return {Boolean} true if the matrix is strictly diagonally dominant
   */
  isStrictlyDiagonallyDominant() {
    if (!this.isSquare) {
      throw new Error('Diagonal dominance is only defined on square matrices');
    }
    return isStrictlyDiagonallyDominant(this);
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
