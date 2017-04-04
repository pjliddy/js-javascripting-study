'use strict'
// semicolons are needed here
// without them, the last word on the line interprets the parens
// on the next line as making it a function call

var a = 1, b = 2, c = 3;
(function firstFunction(){
   var b = 5, c = 6;
   (function secondFunction(){
       var b = 8
       // a: 1, b: 8, c: 6
       console.log("a: "+a+", b: "+b+", c: "+c);
       (function thirdFunction(){
           var a = 7, c = 9;
           (function fourthFunction(){
               var a = 1, c = 8
           })()
       })()
   })()
})()
