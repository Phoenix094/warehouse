const express = require("express");
const mysql = require("mysql");
const router = express.Router();
const bcrypt = require("bcrypt");

const { create, login } = require("../controller/auth");
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
router.post("/login", login);
// router.get("/login", renderLogin);

// route -> adding a new product

router.post("/warehouse/addNew", (req, res) => {
	const { product_name, date, quantity, quantity_format, supplier, remark } =
		req.body;

	db.query(
		"INSERT INTO productlist (date, product_name, quantity, quantity_format, supplier, remark) VALUES (?, ?, ?, ?,?,?)",
		[date, product_name, quantity, quantity_format, supplier, remark],
		(error, result) => {
			if (error) {
				console.log(error);
			} else {
				res.json({ message: "Product added successfully" });
			}
		}
	);
});

//route -> updateing data(adding data)

router.put("/warehouse/addProduct/:id", addData);
router.get("/warehouse/addProduct/:id", displayAddData);

// route -> dipatch product

router.post("/warehouse/dispatchProduct/:id", dispatchListAdd);

module.exports = router;
