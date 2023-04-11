const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  let command = arr.find(item => String(item).startsWith('--'));
switch(command){
case '--discard-next':
arr.splice(arr.indexOf('--discard-next'), 2);
break;
case '--discard-prev':
arr.splice(arr.indexOf('--discard-prev')-1, 2);
break;
case '--double-next':
arr.splice(arr.indexOf('--double-next'), 1, arr[arr.indexOf('--double-next')+1] );
break;
case '--double-prev':
arr.splice(arr.indexOf('--double-prev'), 1, arr[arr.indexOf('--double-prev')-1] );
break;
} return arr;

    
}

module.exports = {
  transform
};
