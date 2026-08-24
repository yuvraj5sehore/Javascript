// a function passed as an argument in another function are called callback function


function num(n,callback){ // recieves the argument that send during function call 5 as n or double as a callback
    return callback(n);  // means return double(n);
}

const double = (n) => n*2;

console.log(num(5,double)); // in this line we are passing a function double as an argument in num function 


// dry run 

/* 
1)function num is created in the memory 
2) double is a variable that stores a reference to the arrow function (n) => n * 2.
3) Now the function num(5,double) now the function is called with the 5,double both the arguments 
4) num function get n = 5 and callback = double variable  






*/   
