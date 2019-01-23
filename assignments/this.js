/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
    In a method, this refers to the owner object.
    Alone, this refers to the global object.
    In a function, this refers to the global object.
    
    In an event, this refers to the element that received the event.
    Methods like call(), and apply() can refer this to any object.

* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
// ===========code example for Window Binding========
// method
// Create an object:
const person = {
    firstName: "John",
    lastName : "Doe",
    id     : 26,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };



// Principle 2
//========== code example for Implicit Binding======

const MyObject = function (){
    this.name = 'MyObjectName';
    this.myProperty = 'property';
  };
 
  MyObject.prototype.doStuff = function (action) {
    console.log(this.name + ' is ' + action + '!');
  }
 
  const obj = new MyObject();
 
  obj.doStuff('awesome'); // prints 'MyObjectName is awesome!'


// Principle 3
// ===============code example for New Binding============
const sayMyName = function () {
    console.log('My name is ' + this.name);
  };

  const jake = {
    name: 'Jake'
  }

  const sayMyName = sayMyName.bind(jake);
  sayMyName(); // 'My name is Jake'




// Principle 4
//===================code example for Explicit Binding========
const runner = { name: 'John', myFavoriteActivity: 'running' };
  MyObject.prototype.doStuff.call(runner, runner.myFavoriteActivity); // prints 'John is running!';
