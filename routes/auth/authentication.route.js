const authController = require("../../controllers/auth/auth.controller");

//require express
const express = require("express");
//calling express router method
const route = express.Router();

//login route
route.post("/login", authController.login);

//signup route
route.post("/signup", authController.signUp);

//exporting the route
module.exports = route;
