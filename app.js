const express = require("express");
const path = require("path");
const app = express();
// const cors = require("cors");

// app.use(
//   cors({
//     origin: "*",
//   })
// );

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("/names", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  console.log(res.header);
  res.send("Jomassauro");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
