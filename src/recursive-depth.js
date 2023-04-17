const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.depth = 0;
  }

  calculateDepth(array) {
    if (!Array.isArray(array)) {
      return 0;
    }
    
 let max = 0;
    for (let elem of array) {
      let count = this.calculateDepth(elem);
      max= Math.max(max, count);
    }

    return  max +1;
  }
}

module.exports = {
  DepthCalculator
};
