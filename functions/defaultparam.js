// Default parameters are used when no argument is provided during the function call. If no value is passed, 
// the function automatically uses the default value.



function name(value = "yuvraj"){
    console.log("Hello "+ value);
    
}

name();  //no argument is passed in the function name will use the default parameter as a argument
 

function greet(name = "yuvraj"){
   return "Hello " + name ;
}


console.log(greet("lakhan")); // when argument is passed your output will be different 