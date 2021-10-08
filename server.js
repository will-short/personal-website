const express = require("express");
const csrf = require("csurf");
const cookieParser = require("cookie-parser");

const { urlencoded } = require("express");

const app = express();

const csrfProtection = csrf({ cookie: true });

app.set("view engine", "pug");

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname));

const asyncHandler = (handler) => (req, res, next) =>
  handler(req, res, next).catch(next);

app.get("/", (req, res) => {
  res.render("home");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(" on port " + port));
