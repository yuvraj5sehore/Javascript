
import fs from 'node:fs';

//create a file and update a file 
fs.writeFileSync("./a.txt","Hello from Nodejs");
//update a file 
fs.writeFileSync("./a.txt","Hello from Nodejs which is updated Now");
// Read a file

let data = fs.readFileSync("./a.txt",{encoding:"utf-8"});

console.log(data);

//delete a file
fs.unlinkSync("./a.txt");

//Create write and update a file
// console.log("start");

// fs.writeFile("./a.txt","utf-8",function(err,data){
//     console.log(err,data);
// });

// //Delete file
// fs.unlink("./a.txt",function(err){
//     console.log(err);
// })

// create a folder 
fs.mkdirSync("./xyz"); 