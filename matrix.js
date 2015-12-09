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
        if (this.cols !== matrix.rows) {
            throw 'matrix size mismatch';
        }

        var out = [];
        var row, col;
        for (var r = 0; r < this.rows; r++) {
            row = this.matrix[r];
            out.push([]);
            for (var c = 0; c < matrix.col; c++) {
                col = matrix.getColumn(c);
                out[r][c] = 0;
                for (var i = 0; i < col.length; i++) {
                    out[r][c] += row[r] * col[i];
                }
            }
        }
        return new Matrix(out);
    }

    /**
     * post multiplication
     * @param {Matrix} matrix
     * @returns {Matrix} a new matrix object with the product of the two matrices
     */
    postMultiply(matrix) {
        this.multiply(matrix);
    }

    /**
     * pre multiplication
     * @param {Matrix} matrix
     * @returns {Matrix} a new matrix object with the product of the two matrices
     */
    preMultiply(matrix) {
        matrix.multiply(this.matrix);
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
     * get the determinant of the matrix
     * @returns {Number} the determinant of a square matrix
     */
    determinant() {
        if (this.determinant) {
            return this.determinant;
        }
        if (!this.isSquare) {
            throw 'determinant is only defined for square matrices';
        }
    }

    /**
     * get the rank of the matrix
     * @returns {Number} rank of the matrix
     */
    rank() {
        if (this.rank) {
            return this.rank;
        }
    }
}
