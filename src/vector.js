import types from './types';
/**
 * Vector object
 * @param {Array<Number>} v
 */
export default class Vector {

  constructor(v) {
    this.vector = JSON.parse(JSON.stringify(v));
    this.type = types.VECTOR;
    this.size = this.vector.length;
  }

  get(i) {
    if (i >= this.size || i < 0) {
      throw new Error('index out of bounds');
    }
    return this.vector[i];
  }

}
