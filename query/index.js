const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/posts", (req, res) => {});
app.post("/posts", (req, res) => {});

app.listen(3003, () => {
  console.log("Listening on port 3003");
});
