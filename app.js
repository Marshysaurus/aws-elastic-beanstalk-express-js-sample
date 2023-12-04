const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) =>
  res.send("You have met with a terrible fate, haven't you?")
);

app.listen(port);
console.log(`App running on http://localhost:${port}`);
