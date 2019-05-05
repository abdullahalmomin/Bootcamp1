var express = require("express");
var app = express();
var hbs = require("express-handlebars");
app.use(
  express.urlencoded({
    extended: true
  })
);
app.engine(".hbs", hbs({ extname: ".hbs", defaultLayout: "main" }));
app.set("view engine", ".hbs");

app.get("/", (req, res) => {
  // parameter
  // query
  // body
  res.render("index", {
    name: req.params.name
  });
});
// static file permision
app.use(express.static(__dirname + "/public"));
app.post("/", (req, res) => {
  res.send("your name is " + req.body.name + " and age is " + req.body.age);
});
app.post("/this-is-my-post-route", (req, res) => {
  //   res.send(`<h1>hello express</h1>`);
  res.json(req.body);
});
app.listen(3000, () => {
  console.log("Server  working at http://localhost:3000   ");
});
