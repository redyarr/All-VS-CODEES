const express = require("express");
const app = express();

app.listen(5000, () => {});
let array = [
  {
    firstName: "reday",
  },
];

app.get("/", (req, res) => {
  res.send("all data");
});

app.post("/add-user", (req, res) => {
  const body = req.body;
  array.push(body);
  res.send(array);
});
