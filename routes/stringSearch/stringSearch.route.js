const stringSearchController = require("../../controllers/stringSearch/stringSearch.controller");
//require express
const express = require("express");
//calling express router method
const route = express.Router();

//search string endpoint
route.get("/:word", stringSearchController.checkAnagram);

//exporting the route
module.exports = route;
