const express = require("express");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

// Create a GET route to '/posts'
app.get("/posts", (req, res) => {
  res.send(posts);
});

// Create a POST route to '/posts'
app.post("/posts", async (req, res) => {
  const id = crypto.randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  await axios
    .post("http://localhost:3005/events", {
      type: "PostCreated",
      data: {
        id,
        title,
      },
    })
    .catch((err) => {
      console.log(err.message);
    });

  res.status(201).send(posts[id]);
});

app.post("/events", (req, res) => {
  console.log("Event Received:", req.body.type);

  res.send({});
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
