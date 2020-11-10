const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mentors = require("./routes/mentors");
const bootcampers = require("./routes/bootcampers");

const indexRouter = require("./routes/index");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);

app.use("/mentors", mentors);
app.use("/bootcampers", bootcampers);

module.exports = app;
