//Challenge 1: String Reversal
//without using js methods

// function stringReverse(str) {
//   let strReversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     strReversed += str[i];
//   }
//   return strReversed;
// }
// console.log(stringReverse("hello"));
// //using Built in js  methods
// function stringReverseUsingReverse(str) {
//   const strReversed =  str
//                           .split('')
//                           .reverse()
//                           .toString()
//                           .replaceAll(',', '');
//   return strReversed;
// }

// console.log(stringReverseUsingReverse("hello"));

//==========================================

// Challenge 2: FizzBuzz

// function fizzBuzz(n) {
//   if (n<=0) {
//     return 0;
//   }

//   for (let i = 1; i <= n; i++) {
//     if (i % 3==0 && i % 5==0) {
//       console.log("FizzBuzz");
//     }else if(i % 3==0 ){
//       console.log("Fizz");
//     }else if(i % 5==0 ){
//       console.log("Buzz");
//     }else{
//       console.log(i);
//     }

//   }
// }

// fizzBuzz(20);
//==========================================

// Challenge 3: Palindrome Checker
// function ignores(str) {
//   let nStr = str.toLowerCase().replaceAll(" ",'');
//   let returnedStr = nStr.replaceAll(',','').replaceAll(':','');
//   return returnedStr;
// }
// function checkPalindrom(str) {
//   let ignored = ignores(str);
//   let reversedStr = ignored.split('')
//                         .reverse()
//                         .toString()
//                         .replaceAll(',', '');

//   if(ignored === reversedStr) console.log(`
//     true (because "${ignored}" is a palindrome)
//     `);
//   else console.log("dosnot match");
//   console.log(ignored ,reversedStr);
// }

// checkPalindrom("A man, a plan, a canal: Panama");
//===================================================

//Challenge 4: Array Sum Pairs
// function sumPairs(arr ,target){
//   let objStore ={};
//   let result =[];
//   let comp ;
//   for (let key of arr ) {
//     comp = target - key;
//     objStore[key] = true;
//     if (objStore[comp]) {
//       result.push([comp ,key]);
//     }
//   }
//   return result;
// }
// console.log(sumPairs( [1, 4, 5, 0, 2, 3] ,5));
//===================================================

//Challenge 5: Simple Shopping Cart

// const ShoppingCart = {
//   items: {},

//   add(name, quantity, price) {
//       if (this.items[name]) {
//           this.items[name].quantity += quantity;
//       } else {
//           this.items[name] = {quantity, price };
//       }
//   },

//   remove(name) {
//       delete this.items[name];
//   },

//   update(name, quantity) {
//       if (this.items[name]) {
//           this.items[name].quantity = quantity;
//       }
//   },

//   calculateTotal() {
//       let total = 0;
//       for (let item in this.items) {
//           total += this.items[item].quantity * this.items[item].price;
//       }
//       return total.toFixed(2);
//   }
// };

// ShoppingCart.add("apple", 3, 1.25);
// ShoppingCart.add("orange", 2, 0.85);

// console.log("Total cost: $" + ShoppingCart.calculateTotal());
