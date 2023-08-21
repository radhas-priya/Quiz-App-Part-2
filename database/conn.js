const mongoose = require("mongoose");

async function connect() {
  await mongoose.connect(process.env.ATLAS_URI)
  console.log("Database connected")
}

module.exports = connect;
