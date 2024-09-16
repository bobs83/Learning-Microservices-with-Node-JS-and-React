const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  const event = req.body;

  try {
    await axios.post("http://localhost:3000/events", event);
  } catch (err) {
    console.error("Error posting to service on port 3000:", err.message);
  }

  try {
    await axios.post("http://localhost:3001/events", event);
  } catch (err) {
    console.error("Error posting to service on port 3001:", err.message);
  }

  try {
    await axios.post("http://localhost:3002/events", event);
  } catch (err) {
    console.error("Error posting to service on port 3002:", err.message);
  }

  res.send({ status: "OK" });
});

app.listen(3005, () => {
  console.log("Listening on 3005");
});
