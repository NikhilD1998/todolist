const express = require("express");
const bodyparser = require("body-parser");
const app = express();

var items =['Task 1', 'Task 2', 'Task 3',]

app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static('public'))

app.get("/", function (req, res) {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindofDay: day, newListItems: items });
});

app.post("/", function (req, res) {
  item = req.body.newItem;
  items.push(item)
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server Running at port 3000");
});
