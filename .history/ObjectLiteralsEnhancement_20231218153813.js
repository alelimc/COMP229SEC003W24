Object Literal Enhancement

Object literal enhancement is the opposite of destructuring. It is the process of restructuring or putting the object back together. With object literal enhancement, we can grab variables from the global scope and add them to an object:

 

const name = "Tallac";

const elevation = 9738;

 

const funHike = {  name,  elevation };

 

console.log(funHike);  // {name: "Tallac", elevation: 9738}

 

//name and elevation are now keys of the funHike object.

 

We can also create object methods with object literal enhancement or restructuring:

 

const name = "Tallac";

const elevation = 9738;

const print = function()  {

console.log(`Mt. ${this.name} is ${this.elevation} feet tall`);

};

 

const funHike = {  name,  elevation,  print };

 

funHike.print();  // Mt. Tallac is 9738 feet tall

 

 

 

 

 

//Notice we use this to access the object keys.

 

//When defining object methods, it is no longer necessary to use the function keyword: