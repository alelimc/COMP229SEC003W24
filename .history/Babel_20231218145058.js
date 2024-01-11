//As an example, let’s look at an arrow function with some default arguments:

const add = (x = 5, y = 10) => console.log(x + y);

//If we run Babel on this code, it will generate the following:
 
"use strict";
var add = function add()  {
var x =
arguments.length <= 0 || arguments[0]  === undefined ? 5 : arguments[0];
var y =
arguments.length <= 1 || arguments[1]  === undefined ? 10 : arguments[1];
return console.log(x + y);
};
