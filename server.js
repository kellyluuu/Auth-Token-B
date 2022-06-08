// Dependencies
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();

require("dotenv").config();

const peopleRouter = require("./routes/people");
const usersRouter = require("./routes/users");

// DB Config
require("./config/database");

// Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(cors());

// Routers
app.use("/people", peopleRouter);
app.use("/users", usersRouter);

// Listener
const { PORT = 3001 } = process.env;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));