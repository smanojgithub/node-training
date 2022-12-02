const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

async function main() {
  console.log("db connecting");
  await mongoose.connect(process.env.MONGO_URL);
  console.log("db connected");
  const app = express();
  app.use(express.json());
  app.use("/api/products", require("./src/api/products/products.routes"));
  app.listen(3000, () => console.log("server started"));
}
main();
