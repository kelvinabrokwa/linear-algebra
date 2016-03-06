/**
 * Vector object
 * @param {Array<Number>} v
 */
export default class Vector {

  constructor(v) {
    this.vector = JSON.parse(JSON.stringify(v));
    this.size = this.vector.length;
  }

}
