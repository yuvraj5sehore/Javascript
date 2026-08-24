// a function which do at least one of two things :-
//1) Takes another function as a argument 
//2) or return a new function as its output are called HOF functions 

// These function are very common in js Eg are Map , Filter, Reduce.


function applyOperation(a,b, operation){
    return operation(a,b); // returning a function which means it is satisfying the HOF second condition
}

function add(x,y){
    return x+y;
}

console.log(applyOperation(2,3, add)); //function add passed as an argument in another function here satisfying HOF condition 1;

