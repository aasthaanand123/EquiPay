const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");
require("dotenv").config();
const path = require("path");
const PORT = 6474;
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
const passport = require("passport");
const userRouter = require("./routes/user");
const postRouter = require("./routes/post");
const searchRouter = require("./routes/search");
const flash = require("connect-flash");

app.use(flash());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URL }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/user/auth", userRouter);
app.use("/user/dash", postRouter);
app.use("/user", searchRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is started at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
