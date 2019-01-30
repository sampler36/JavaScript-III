/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  2 things to descibe the principles of this and its as follows:
    In a method, this refers to the owner object.
    In a function, this refers to the global object.

* 2.  we use it when calling a function using "." or dot (this.function)

* 3. launches with out a return function.
* 4.  Methods like call(), and apply() can refer this to any object.
*
* write out a code example of each explanation above
*/

// Principle 1
// ===========code example for Window Binding========
// method
// Create an object:   when i created the guy in .....speak => 
const person = {
    firstName: "Tale",
    lastName : "Anto",
    id     : 26,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

console.log(person)

// Principle 2
//========== code example for Implicit Binding======

const MyObject = function (){
    this.name = 'Talent';
    this.myProperty = 'property'; // implicit stuff
  };
 
  MyObject.prototype.doStuff = function (action) {
    console.log(this.name + ' is ' + action + '!');// implicit stuff
  }
 
  const obj = new MyObject();
 
  obj.doStuff('awesome'); // prints 'MyObjectName is awesome!'


// Principle 3
// ===============code example for New Binding============
let runningShoe = function(name, size, color){
  this.name = name;
  this.size = size;
  this.color = color
}
let athlete = new runningShoe('nike', 7, 'white');

console.log(athlete);

// Principle 4
//===================code example for Explicit Binding========
// taking an object from another function
// occurs when .call(), .apply(), or .bind() are used on a function.
const runner = { name: 'talent', myFavoriteActivity: 'running' };
  MyObject.prototype.doStuff.call(runner, runner.myFavoriteActivity); // prints 'John is running!';
