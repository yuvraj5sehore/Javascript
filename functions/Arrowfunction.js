// It is a new way to write functions using the => arrow syntax they are shorter and do not have their own this binding ,which 
//makes them useful in some cases 


let sum = (a,b) =>{ // no need of the function keyword we can execute it directly using arrow => 
    return a+b;
}

// dry run code
//javascript creates a function and store it in the memory and 
// assign it to the variable sum
// now sum is pointing to the function in memory 

console.log(sum(3,4)); // sum is a variable name 
// () means call invoke execute the function which sum is pointing to sum variable 
// (3,4) send 3,4 as an argument to the function 

// after calling the function 
//functions run return the value 3+4 which is 7 
// now inside console.log() we get 7 and console.log prints it 
