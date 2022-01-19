const express = require("express");
const app = express();
const port = 80;

app.get("/", (req, res) => {
  res.send({ name: "Prateek", age: 32 });
});

app.get("/add", (req, res) => {
  res.send({ name: "Prateek", age: 32, add: "Addition" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
