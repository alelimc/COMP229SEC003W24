Classes

Prior to ES2015, there was no official class syntax in the JavaScript spec. When classes were introduced, there was a lot of excitement about the familiar syntax of classes to traditional object oriented languages like Java and C++. The past few years saw the React library leaning on classes heavily to construct user interface components.


Today, React is beginning to move away from classes; using functions instead of classes to construct components.

 

JavaScript uses something called prototypical inheritance. This technique can be wielded to create structures that feel object oriented. For example, we can create a Vacation constructor that needs to be invoked with a new operator:

 

 

function Vacation(destination,  length)  {

this.destination = destination;

this.length = length;

}

Vacation.prototype.print = function()  {

console.log(this.destination + " | " + this.length + " days");

};

const maui = new Vacation("Maui",  7);

maui.print();  // Maui | 7 days

 

This code create something that feels like a custom type in an object oriented language. A Vacation has properties (destination, length) and it has a method (print). The maui instance inherits the print method through the prototype. If you are or were a developer accustomed to more standard classes, this might have filled you with a deep rage.


ES2015 introduced class declaration to quiet that rage, but the dirty secret is that JavaScript still works the same way. Functions are objects, and inheritance is handled through the prototype. Classes provide a syntactic sugar on top of that gnarly prototype syntax:

 

class Vacation {

constructor(destination, length) {

this.destination = destination;

this.length = length;

}

print()  {

console.log(`${this.destination} will take ${this.length} days.`);

}

}

 

When you’re creating a class, the class name is typically capitalized. Once you’ve created the class, you can create a new instance of the class using the new keyword. Then you can call the custom method on the class:

 

const trip = new Vacation("Santiago, Chile",  7);

trip.print();  // Chile will take 7 days.

 

 

Now that a class object has been created, you can use it as many times as you’d like to create new vacation instances. Classes can also be extended. When a class is extended, the subclass inherits the properties and methods of the superclass. These properties and methods can be manipulated from here, but as a default, all will be inherited.

 

You can use Vacation as an abstract class to create different types of vacations. For instance, an Expedition can extend the Vacation class to include gear:

 

 

class Vacation {

  constructor(destination, length) {

    this.destination = destination;

    this.length = length;

  }

 

  print() {

    console.log(`Destination: ${this.destination}, Length: ${this.length}`);

  }

}

 

class Expedition extends Vacation {

  constructor(destination, length, gear) {

    super(destination, length);

    this.gear = gear;

  }

 

  print() {

    super.print();

    console.log(`Bring your ${this.gear.join(" and your ")}`);

  }

}

 

// Create an instance of the Expedition class

const expedition = new Expedition("Mount Everest", "2 weeks", ["Climbing boots", "Crampons", "Ice axe"]);

 

// Call the print method

expedition.print();

 

 

That’s simple inheritance: the subclass inherits the properties of the superclass. By calling the print method of Vacation, we can append some new content onto what is printed in the print method of Expedition. Creating a new instance works the exact same way—create a

variable and use the new keyword:

 

class Expedition {

  constructor(destination, length, gear) {

    this.destination = destination;

    this.length = length;

    this.gear = gear;

  }

 

  print() {

    console.log(`${this.destination} will take ${this.length} days.`);

    console.log(`Bring your ${this.gear.join(" and your ")}.`);

  }

}

 

const trip = new Expedition

("Mt. Whitney", 3, ["sunglasses", "prayer flags", "camera"]);

trip.print();

 

// Mt. Whitney will take 3 days.

// Bring your sunglasses and your prayer flags and your camera

 

 