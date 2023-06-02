import express from "express";
const app = express();
const port = 3000;

//We are defining dynamic route and using req.param to get the ID   entered by the user
app.get("/Student/delete/:id", (req, res) => {
  res.send(`Hello, ${req.params.id} is deleted from our database. `);
  console.log(req.params);
});

//In this section we have used two paths which are dynamic.
app.get("/Product/:category/:id", (req, res) => {
  res.send(
    `Your selected product catogery is "${req.params.category}" your id is "${req.params.id}"`
  );
  console.log(req.params);
});
//The new way or the destructured method by which we can take path
app.get("/Services/:Type/:number", (req, res) => {
 const { Type, number } = req.params;
  console.log(req.params);
  res.send(
    `Your selected product catogery is ${Type} your number is "${number}"`
  );
});
//Using string between route parameters
app.get("/Services/:Year/and/:month", (req, res) => {
  const { Year, month } = req.params;
  console.log(req.params);
  res.send(`You bought service in year ${Year} and month "${month}"`);
});
//Creating a new route parameter
app.get("/Train/:from-:to", (req, res) => {
  const { from, to } = req.params;
  console.log(req.params);
  res.send(`You filled that you have to go ${from} to ${to}`);
});
//from where you are
app.get("/Location/:Village.:Post", (req, res) => {
  const { Village, Post } = req.params;
  console.log(req.params);
  res.send(
    `You have choosen your loaction village ${Village} and post ${Post}`
  );
});
app.get("/:type(post|article)/:id", (req, res) => {
  console.log(req.params);
  res.send("Post or Article");
});


app.listen(port, () => {
  console.log(`Your server is running at the port http://localhost:${port}`);
});
