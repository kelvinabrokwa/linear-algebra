import Matrix from './matrix';

/**
 * multiply two matrices in the order that they are added
 * @param {Matrix} m1
 * @param {Matrix} m2
 * @returns {Matrix} a new matrix object with the product of the two matrices
 */
export default function(m1, m2) {
    if (m1.cols !== m2.rows) {
        throw 'throw matrix size mismatch';
    }

    var out = [];
    var row, col;
    for (var r = 0; r < m1.rows; r++) {
        row = m1[r];
        out.push([]);
        for (var c = 0; c < m2.col; c++) {
            col = m2.getColumn(c);
            out[r][c] = 0;
            for (var i = 0; i < col.length; i++) {
                out[r][c] += row[r] * col[i];
            }
        }
    }

    return new Matrix(out);
}
