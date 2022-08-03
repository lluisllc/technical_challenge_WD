require("dotenv/config");
require("./db");
const express = require("express");
const app = express();


const phoneRoutes = require("./routes/phone.routes")
app.use("/api/phones", phoneRoutes)

const allRoutes = require("./routes");
app.use("/api", allRoutes);

module.exports = app;