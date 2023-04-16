const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  str: '',
 
 addLink (value) {
   // console.debug(chainMaker);
   
   if(this.str === '') {
     this.str = `( ${String(value)} )`;
   } else {
     this.str +=`~~( ${String(value)} )`
   }
   return this; },
   
   finishChain () {
       let res = this.str;
       this.str = '';
       return res;
   
   },
   
   getLength() {
   return this.str.split('~~').length;
   },
   
   reverseChain () {
   this.str = this.str.split('~~').reverse().join('~~');
   return this;
   },
   
   removeLink (position) {
   if(!Number.isFinite(position) || Math.trunc(position)!==position || position< 1 || position> this.getLength() ) {
     this.str='';
  throw new Error("You can't remove incorrect link!");
     }
   this.str = this.str.split('~~');
   this.str.splice(position-1, 1);
   this.str = this.str.join('~~');
   return this;
   }
};



module.exports = {
  chainMaker
};
