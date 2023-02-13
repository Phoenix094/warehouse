const express = require("express");
const mysql = require("mysql");
const router = express.Router();
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

const encoded = bodyParser.urlencoded();

const { create, login, renderLogin } = require("../controller/auth");
const {
	fetchDispatchList,
	fetchProductList,
} = require("../controller/fetchData");
const { addData, displayAddData } = require("../controller/updateData");
const { dispatchListAdd } = require("../controller/dipatchList");

const db = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
});

// route -> product list
router.get("/warehouse", fetchProductList);

// route -> disptch list
router.get("/warehouse/dispatchlist", fetchDispatchList);

// route -> creating user
router.post("/createuser", create);

// route -> login user
// router.get("/login", renderLogin);
router.post("/login", login);

// route -> adding a new product

router.post("/warehouse/addNew", addData);

//route -> updateing data(adding data)

router.put("/warehouse/addProduct/:id", addData);
router.get("/warehouse/addProduct/:id", displayAddData);

// route -> dipatch product

router.post("/warehouse/dispatchProduct/:id", dispatchListAdd);

module.exports = router;
