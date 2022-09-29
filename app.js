const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", exphbs.engine({ defaultLayout: "home" }));
app.set('view engine', 'handlebars');

const main = require('./routess/home/main')
app.use('/',main)
app.listen(4001, () => {
  console.log("listening");
});
