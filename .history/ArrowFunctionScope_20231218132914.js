//const tahoe = {
    //mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
    //print: function(delay = 1000) {
    //setTimeout(function() {
    //console.log(this.mountains.join(", "));
    //}, delay);
    //}
    //};
    //tahoe.print(); // Uncaught TypeError: Cannot read property 'join' of
   // undefined
    
    //This error is thrown because it’s trying to use the .join method on what this is. If we log this, we’ll see that it refers to the Window object.
    //console.log(this); // Window {}

//To solve this problem, we can use the arrow function syntax to protect the scope of this:

const tahoe = {
mountains: ["Freel", "Rose", "Tallac",  "Rubicon",  "Silver"],
print: function(delay = 1000)  {
setTimeout(()  => {
console.log(this.mountains.join(", "));
},  delay);
}
};
tahoe.print();  // Freel, Rose, Tallac, Rubicon, Silver
 
