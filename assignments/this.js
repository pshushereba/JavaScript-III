/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding: When we're in the global scope, the 'this' keyword will point towards the browser window object.
* 2. Implicit binding: In this context, whenever we call a function using dot notation, the 'this' keyword will refer to the object that is to the left of the dot.
* 3. New binding: When we use the 'new' keyword, it is because we are using a constructor function to instantiate a new Object. In this circumstance, 'this' refers to the specific instance of the object being created.
* 4. Explicit binding: 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function broadcast(message) {
    console.log(this);
    return message;
}

broadcast("Hello World!");

// Principle 2

// code example for Implicit Binding
const city = {
    name: "Los Angeles",
    population: 4000000,
    nickname: "City of Angels",
    greeting: function(person) {
        console.log(`Welcome to the ${this.nickname}, ${person}`);
    }
};

city.greeting("Patrick");

// Principle 3

// code example for New Binding
function User(userAttrs) {
    this.id = userAttrs.id;
    this.name = userAttrs.name;
    this.location = userAttrs.location;
}

const patrick = new User({id: 007, name: "Patrick", location: "Southern California"});
console.log(patrick);
// Principle 4

// code example for Explicit Binding