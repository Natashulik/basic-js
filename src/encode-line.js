const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
if(str==='') return '';
  return str.split('').map((item,index,array)=>{
     if(item !== array[index+1] && index !=array.length-1) {
         return item +'!'
     } else return item;
  }).join('').split('!').map(item=> item.length+item[0]).join('').split('').filter(item => item !=1 && item !=0).join('')
 
 }

module.exports = {
  encodeLine
};
