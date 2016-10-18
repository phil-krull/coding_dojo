var Stack = require('./stack');
Stack.prototype.test = function () { console.log("hello"); }
var stack = new Stack();
stack.push("Bulbasaur");
stack.push("Charmander");
stack.push("Squirtle");
stack.display();
console.log("Taking out Spuirtle");
stack.pop();
stack.display();
console.log("Adding Pikachu");
stack.push("Pikachu");
stack.display();
stack.test();