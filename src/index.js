const express = require("express");
const {add_user, get_user_by_email} = require("./query");
const app = express();
const bodyparser = require("body-parser")
const port = process.env.PORT || 3000;

app.use(bodyparser.json())

app.post("/users", async (req, res) => {
  try{
    console.log(req.hasBody)
    console.log(req.body)
    const user = req.body;
    await add_user(user.user_name, user.email, user.google_data)
    res.send({ statusCode: 200 });
  } catch(e) {
    console.log(e)
    res.send({statusCode: 500})
  }
});

app.get("/user", async (req, res) => {
  const user = await get_user_by_email(req.query.email)
  res.send({ statusCode: 200, body: user });
});

app.listen(port, () => {
  console.log("Env port", process.env.PORT)
  console.log("Env DB", process.env.DATABASE_URL)
  console.log(`Example app listening at http://localhost:${port}`);
});
