const express = require("express");

const app = express();

console.dir(app);
let port = 8080;


app.listen(port,()=>{
  console.log(`The server is listening to ${port}`);
});

app.use((req,res)=>{
    console.log("request recieved");
    let code = "<h1>Fruits</h1> <ul><li>apple</li> <li>orange</li></ul>";
    res.send(code);
})

