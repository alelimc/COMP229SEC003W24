//const person = (firstName, lastName) =>
//{
//first: firstName,
//last: lastName
//}
//console.log(person("Brad", "Janson"));

//As soon as we run this, you’ll see the error: Uncaught SyntaxError: Unexpected token :.
To fix this, just wrap the object you’re returning with parentheses:
 
const person = (firstName,  lastName)  => ({
first: firstName,
last: lastName
});
console.log(person("Flad",  "Hanson"));
 

//These missing parentheses are the source of countless bugs in JavaScript and React apps, so it’s important to remember this one!
