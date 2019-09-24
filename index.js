// Import stylesheets
import './style.css';

// Write Javascript code!
//Primitive -string,boolean,bigInt,Number,Symbol, null and undefined
let foo = 5;
function addOne(num) {
   num += 1;
   //console.log(num)
}
function addTwo(foo) {
   foo += 2;
   //console.log(foo)
}
addOne(foo);
console.log(foo);   
addTwo(foo);
console.log(foo);   

//Non Primitive - arrays, objects
var arr1 = [ 1, 2, 3, 4, 5 ];
var arr2 = [ 1, 2, 3, 4, 5 ];
console.log(arr1 === arr2);  //same order

var obj3 = { 'car' : 'purple' }
var obj4 = obj3;
console.log(obj3 === obj4); //refering to underlying object (strict equals)

//Closure
function init() {
  var name = 'Chrome'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function which is a closure
    //alert(name); // using variable declared in the parent function
  }
  displayName();
}
init();

//Closure scopes
// global scope
var e = 10;
function sum(a){
  return function(b){
    return function(c){
      // outer functions scope
      return function(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

console.log(sum(10)(20)(30)(30));