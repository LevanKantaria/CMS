const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", exphbs.engine({ defaultLayout: "home" }));
app.set('view engine', 'handlebars');



const home = require('./routess/home/main')
const admin = require('./routess/admin/main')




app.use('/',home)
app.use('/admin',admin)





app.listen(4001, () => {
  console.log("listening");
});
