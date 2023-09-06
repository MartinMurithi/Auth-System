require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookiePareser = require("cookie-parser");

const dbConnect = require("./config/connect");
const routes = require("./routes/userRoute");
const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookiePareser());

dbConnect();

app.use('/', routes);
// Error handler
app.all("*", (req, res) => {
  res.status(404);
  res.json({ error: "Resource not found" });
});

mongoose.connection.once("open", () => {
  app.listen(PORT, () => console.log("Server connected"));
});
