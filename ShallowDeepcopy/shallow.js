/* a shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those 
of the source object from which the copy was made */


/* as a result where you can change either the source or the copy you may also cause the other object to change too , that behaviour contrast 
with the behaviour of deep copy , in which the source and copy are completely independent*/


var obj = {
    name:"harsh",
    age:25
}


var obj2 = obj; // giving references

obj2.name = "harshita";


console.log(obj);
console.log(obj2);


