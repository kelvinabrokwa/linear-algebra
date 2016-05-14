Node Linear Algebra
---

![](https://travis-ci.org/kelvinabrokwa/linear-algebra.svg?branch=master)

A comprehensive linear algebra library for Node.js!

### Matrix Operations

- `transpose`: get the [transpose](https://en.wikipedia.org/wiki/Transpose) of a matrix
- `equals(matrix1 , matrix2)`: compare two matrices entry-wise
- `isDiagonal`: check if a matrix is a [diagonal matrix](https://en.wikipedia.org/wiki/Diagonal_matrix)
- `isDiagonallyDominant` check for [diagonal dominance](https://en.wikipedia.org/wiki/Diagonally_dominant_matrix)
- `isStrictlyDiagonallyDominant` check for [strict diagonal dominance](https://en.wikipedia.org/wiki/Diagonally_dominant_matrix)
- `isSPD`: check if a matrix is [Symmetric Positive Definite](https://en.wikipedia.org/wiki/Positive-definite_matrix)
- `multiply`: get the [product](https://en.wikipedia.org/wiki/Matrix_multiplication) of two matrices
- `trace`: get the [trace](https://en.wikipedia.org/wiki/Trace_(linear_algebra)) of a matrix
- `rowReduce`: reduce a matrix to [row-echelon form](https://en.wikipedia.org/wiki/Row_echelon_form)
- `identity(n)`: produce an `nxn` [identity matrix](https://en.wikipedia.org/wiki/Identity_matrix)

### Vector Operations

- `norm`: get the specified [norm]("https://en.wikipedia.org/wiki/Norm_(mathematics)") of the vector
- `dotProduct`: get the [dot product](https://en.wikipedia.org/wiki/Dot_product) of two vectors
