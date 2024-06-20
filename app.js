//access environment variables
require("dotenv").config();
const authenticationRoute = require("./routes/auth/authentication.route");
const userRoute = require("./routes/users/user.route");
const stringSearchRoute = require("./routes/stringSearch/stringSearch.route");
const errorMiddleware = require("./middlewares/error.middleware");
const wildCardRoute = require("./routes/wildCard/wildCard.route");
//Mongo db connection
require("./config/database/dbConnection");
//Require express
const express = require("express");
//Call express
const app = express();
//Accessing port form environment variabless
const port = process.env.PORT || 3000;
//Parse incoming requests with JSON payloads
app.use(express.json());
//Parsing incoming requests with url-encoded payloads
app.use(express.urlencoded({ extended: true }));
//Routing
app.use("/api/auth", authenticationRoute);
app.use("/api/users", userRoute);
app.use("/api/string", stringSearchRoute);
//Wild card route
app.all("**", wildCardRoute);
//Error middleware
app.use(errorMiddleware);
//App listening
app.listen(port, () => {
  console.log(`server is runnning on: http://localhost:${port}`);
});
