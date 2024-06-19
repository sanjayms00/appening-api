//access environment variables
require("dotenv").config();
const authenticationRoute = require("./routes/auth/authentication.route");
const userRoute = require("./routes/users/user.route");
const stringSearchRoute = require("./routes/stringSearch/stringSearch.route");
const mongoConnection = require("./config/database/dbConnection");
//require express
const express = require("express");
//call express
const app = express();

//accessing port form environment variabless
const port = process.env.PORT || 3000;

//parse incoming requests with JSON payloads
app.use(express.json());
// parsing incoming requests with url-encoded payloads
app.use(express.urlencoded({ extended: true }));

//routing
app.use("/api/auth", authenticationRoute);
app.use("/api/user", userRoute);
app.use("/api/string", stringSearchRoute);

//app listening
app.listen(port, () => {
  console.log(`server is runnning on: http://localhost:${port}`);
});
