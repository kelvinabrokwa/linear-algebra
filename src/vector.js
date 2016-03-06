/**
 * Vector object
 * @param {Array<Number>} v
 */
export default class Vector {

  constructor(v) {
    this.vector = JSON.parse(JSON.stringify(v));
    this.size = this.vector.length;
  }

  get(i) {
    if (i > this.size - 1 || i < 0) {
      throw new Error('index out of bounds');
    }
    return this.vector[i];
  }

}
