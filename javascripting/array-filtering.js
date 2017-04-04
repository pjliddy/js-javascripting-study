'use strict'

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let filtered = numbers.filter(
  function evenNumbers (number) {
     return number % 2 === 0;
   }
)

console.log(filtered)
/*

var pets = ['cat', 'dog', 'elephant'];

    var filtered = pets.filter(function (pet) {
      return (pet !== 'elephant');
    });

*/
