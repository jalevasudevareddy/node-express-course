console.log("Express Tutorial");

const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./navbar-app/index.html"));
// });

app.listen(5001, () => {
  console.log("Express server listening on:5001");
});
