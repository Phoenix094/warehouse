const mysql = require("mysql");

const db = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
});

exports.addData = (req, res) => {
	const { product_name, quantity, quantity_format, supplier, remark } =
		req.body;
	const upid = req.params.id;

	db.query(
		"UPDATE productlist SET quantity=?, supplier=?, remark=? WHERE id=?",
		[quantity, supplier, remark, upid],
		(error, result) => {
			if (error) {
				console.log(error);
			} else {
				if (result.affectedRows == 0) {
					res.json({ message: "id is not present" });
				} else {
					res.json({ message: "success" });
				}
			}
		}
	);
};

exports.displayAddData = (req, res) => {
	const upid = req.params.id;

	db.query("SELECT * FROM productlist WHERE id=?", [upid], (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json(result);
		}
	});
};
