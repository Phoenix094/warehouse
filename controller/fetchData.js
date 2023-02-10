const mysql = require("mysql");

const db = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
});

exports.fetchProductList = (req, res) => {
	// Perform a query on the database
	db.query("SELECT * FROM productlist", (err, rows) => {
		if (err) {
			console.error("Error querying the database:", err);
			res.status(500).send("Error querying the database");
		} else {
			res.json(rows);
		}
	});
};

exports.fetchDispatchList = (req, res) => {
	// Perform a query on the database
	db.query("SELECT * FROM productlist", (err, rows) => {
		if (err) {
			console.error("Error querying the database:", err);
			res.status(500).send("Error querying the database");
		} else {
			res.json(rows);
		}
	});
};
