import express from "express";
const app = express();
const port = 3000;

//We are defining dynamic route and using req.param to get the ID   entered by the user
app.get("/Student/delete/:id", (req, res) => {
  res.send(`Hello, ${req.params.id} is deleted from our database. `);
  console.log(req.params);
});

app.listen(port, () => {
  console.log(`Your server is running at the port http://localhost:${port}`);
});
