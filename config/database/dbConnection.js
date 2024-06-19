//require mongoose
const mongoose = require("mongoose");

//mongoose connection with db
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to appening db!");
});
