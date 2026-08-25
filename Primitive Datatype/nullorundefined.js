/*null :- null is a special value in js that represents the deliberate absence of any object to 
1) indicate no value
2) reset or clear variable */


let y = null; //intentionally 
console.log(y); //null

let obj = {property:null};

// intentionally set to null 

console.log(obj.property); // null


/* undefined is a primitive data type and a global property that signifies the complete absence of an assigned value.it is used to indicate:-
1) uninitialized variables
2) missing function return 
3) non existent object property or array elements 
*/

let x ; // uninitialized variable
console.log(x); 

function doSomething(){
   //no return statement 
}

console.log(doSomething());

let obj1 = { }; //no property empty 

console.log(obj1.property);