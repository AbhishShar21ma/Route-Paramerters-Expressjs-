import express from "express";
const app = express();
const port = 3000;

//Static route defined output is attached with the README.md file

app.get("/Student/delete/34", (req, res) => {
  res.send("This Student of ID 34 is deleted from our database.");
});
app.get("/Student/delete/35", (req, res) => {
  res.send("This Student of ID 35 is is deleted from our database");
});
app.get("/Student/delete/36", (req, res) => {
  res.send("This Student  of ID 3466  deleted from our database");
});




app.listen(port, () => {
  console.log(`Your server is running at the port http://localhost:${port}`);
});
