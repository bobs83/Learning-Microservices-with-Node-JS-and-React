const express = require("express");
const bodyParser = require("body-parser");
const crypto = require("crypto");

const app = express();
app.use(bodyParser.json());

const posts = {};

// Update the route to '/posts'
app.get("/posts", (req, res) => {
  res.send(posts);
});

// Update the POST route to '/posts'
app.post("/posts", (req, res) => {
  const id = crypto.randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };
  res.status(201).send(posts[id]);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
