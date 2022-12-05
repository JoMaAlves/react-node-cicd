const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("/names", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Private-Network", "true");
  res.send("Jomassauro");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
