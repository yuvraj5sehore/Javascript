// return statement is used to send a result back from a function. when return executes the function stops running at that point 
// the returned value can be stored in a variable or used directly 

function name(value){  //here function is a keyword in javascript used to make a function 
    //name is the name of the function 
    // value is the parameter of the function which takes the value coming with the function call as an argument 
    //{} code block where your function is written 
    return value + " hello";  // it is the return statement of the name function 

    //return value goes back to function call
}

let res = name("yuvraj"); // you can store it in a variable or use it directly 

console.log(res);  // used after storing in a variable 



