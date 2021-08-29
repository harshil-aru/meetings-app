const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(__dirname));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/login.html"));
});
app.get("/register", function (req, res) {
  res.sendFile(path.join(__dirname, "/register.html"));
});
app.get("/calendar", function (req, res) {
  res.sendFile(path.join(__dirname, "/calendar.html"));
});

app.listen(8080, function () {
  console.log("server running on 8080");
}); //the server object listens on port 8080
