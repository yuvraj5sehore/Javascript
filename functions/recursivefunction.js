// a function which call itself inside its own code block is called recursive function 

/*what is a factorial mean :- The factorial of a number is the product of that number
 and all the whole numbers below it down to 1. It is written with an exclamation mark like n!. 
 For example, 4! means 4 * 3 * 2 * 1, which equals = 24 */


function factorial(n){
    if(n == 0) return 1;
    return n * factorial(n-1); // here n-1 means is factorial(4) is called inside factorial(5);
}

console.log(factorial(5)); //call the function factorial with the argument of 5

