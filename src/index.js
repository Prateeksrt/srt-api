const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send({ name: "Prateek", age: 32 });
});

app.get("/add", (req, res) => {
  res.send({ name: "Prateek", age: 32, add: "Addition" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
