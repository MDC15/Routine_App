const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/v1", (req, res) => {
  res.json({ message: "This is a message!" });
});

app.listen(PORT, () => {
  console.log(`\nServer listening on port http://localhost:${PORT}`);
});
