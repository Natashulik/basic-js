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
  console.debug(arr)
     if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
     let arr2 = [...arr];
 
   if(arr2.indexOf('--double-prev')-2 == arr2.indexOf('--discard-next')) {
     arr2.splice(arr2.indexOf('--double-prev'), 1);
   }
   if(arr2.indexOf('--discard-prev')-2 == arr2.indexOf('--discard-next')) {
    arr2.splice(arr2.indexOf('--discard-prev'), 1);
   }

   let command = arr2.filter(item => String(item).startsWith('--'));
   console.log(command)
   for(let elem of command) {
     switch(elem){
       case '--discard-next':
         if(arr2[arr2.indexOf('--discard-next')+1] !=0 && arr2[arr2.indexOf('--discard-next')+1] != undefined) {
           arr2.splice(arr2.indexOf('--discard-next'), 2);
         } else arr2.splice(arr2.indexOf('--discard-next'), 1);
       break;
       case '--double-next':
         if(arr2[arr2.indexOf('--double-next')+1] !=0 && arr2[arr2.indexOf('--double-next')+1] != undefined) {
           arr2.splice(arr2.indexOf('--double-next'), 1, arr2[arr2.indexOf('--double-next')+1] );
         } else arr2.splice(arr2.indexOf('--double-next'), 1 );
       
       break;
       case '--discard-prev':
         if(arr2[arr2.indexOf('--discard-prev')-1] !=0 && arr2[arr2.indexOf('--discard-prev')-1] !=undefined ) {
           arr2.splice(arr2.indexOf('--discard-prev')-1, 2);
         } else arr2.splice(arr2.indexOf('--discard-prev'), 1);
       break;
       case '--double-prev':
         if(arr2[arr2.indexOf('--double-prev')-1] !=0 && arr2[arr2.indexOf('--double-prev')-1] !=undefined) {
           arr2.splice(arr2.indexOf('--double-prev'), 1, arr2[arr2.indexOf('--double-prev')-1] );
         } else arr2.splice(arr2.indexOf('--double-prev'), 1 );
       break;
       }
   }
    return arr2;
   }
module.exports = {
  transform
};
