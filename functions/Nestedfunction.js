//A function written inside another function are called nested function 

//Functions have access to what is outside of them. Think of them as children who have access 
// to all of their parents' resources. Anything that a parent owns, is also accessible to the child.
//  Not the other way around though. A parent cannot just go rummaging through their child's possessions.

function outerFun(a){
    function innerFun(b){
        return a + b;
    }
    return innerFun;
}

const addTen = outerFun(10);
console.log(addTen(5));

