const express = require("express");
const app = express();

const port = 8080;

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
// Specific routes
app.get("/", (req, res) => {
  res.send("You contacted root path");
});

app.get("/apple", (req, res) => {
  res.send("You contacted apple path");
});

app.get("/mango", (req, res) => {
  res.send("You contacted mango path");
});

// Wildcard route for 404 / non-existent paths (MUST BE AT THE END)
app.post("/",(req,res)=>{
    res.send("you send a post request to root");
});

//path parameter
app.get("/:username/:id", (req, res) => {
    let{username,id}=req.params;
    let htmlstr = `<h1>you contacted the page of @ ${username}!</h1>`;
    res.send(htmlstr);
});


// Start the server
