const userListController = require("../../controllers/userList/userList.controller");
const userListMiddleware = require("../../middlewares/userList.middleware");

//require express
const express = require("express");
//calling express router method
const route = express.Router();

//search string endpoint
route.get("/list", userListMiddleware.checkAdmin, userListController.userList);

//exporting the route
module.exports = route;
