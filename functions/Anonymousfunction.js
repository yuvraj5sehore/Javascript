// an anonymous function is a function which is declared without a name (anonymous). it is commonly used as a callback or assigned it to a variable


const greet = function(){ // here the anonymous function is assigned to a variable 
    return "hi there";
}
// dry run 

//execution starts from the RHS 
// javascript creates or store a function in the memory 
// and now greet is pointing to that function 
// remember function is not run yet 

console.log(greet());  // parentheses () acts as a invocation, call operator ,executes the function

// dry run 
// now inside console.log() greet() is executed 
//() means call or run the function greet is pointing to
// so js goes to the function and executes it 
// the function returns hi there 
// console.log() gets hi there from the function 
// console.log prints that hi there 


console.log(greet); //  gives the function reference points to the function in the memory 
// notice there are no parentheses () so the javascript does not run the function 
// instead greet means give me the function that i am pointing to 

// so the console.log() gets the function itself so the output looks like this 
// [Function: greet]

