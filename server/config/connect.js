const mongoose = require("mongoose");
const DB_STRING = process.env.DB_STRING;

const dbConnect = () => {
  mongoose.connect(DB_STRING);
};

module.exports = dbConnect;