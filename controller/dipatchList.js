const mysql = require("mysql");

const db = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
});

exports.dispatchListAdd = (req, res) => {
	const { date, product_name, quantity, quantity_format, handed_by, location } =
		req.body;

	const upid = req.params.id;
	db.query(
		"INSERT INTO dispatch_list (date, product_name, quantity, quantity_format, handed_by, location) VALUES (?, ?, ?, ?, ?, ?)",
		[date, product_name, quantity, quantity_format, handed_by, location],
		(error, result) => {
			if (error) {
				console.log(error);
			} else {
				db.query(
					"SELECT * from productlist WHERE id=?",
					[upid],
					(err, result) => {
						if (err) {
							console.log(error);
						} else {
							let totalQuantity = result[0].quantity;
							let newQuantity = totalQuantity - quantity;
							db.query(
								"UPDATE productlist SET quantity=? WHERE id=?",
								[newQuantity, upid],
								(er, result) => {
									if (er) {
										console.log(er);
									} else {
										res.json({ message: "Product dispatch added" });
									}
								}
							);
						}
					}
				);
			}
		}
	);
};

exports.addData = (req, res) => {
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
};
