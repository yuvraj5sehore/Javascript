// IIFE functions are executed immediately after declaration
// it is called as the immediately invoked function expression 

// syntax :-

(function(){
    console.log("name is yuvraj");
})();

// ; terminator is neccessary to create two iife function 

(function(){
    console.log("name is yuvraj");
})();


// dry run 
// ok in normal function we declare the function like this 

function greet() {
    console.log("hye");
}

console.log(greet());

// the outer function tells js treat this function as an expression 
// but in this case function is declared and executed immediately 
// the first parenthesis () creates the function expression and () second one executes it immediately 
