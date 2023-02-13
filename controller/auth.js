const mysql = require("mysql");
const bcrypt = require("bcrypt");
const path = require("path");

const db = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
});

exports.create = (req, res) => {
	const { user_name, password } = req.body;

	console.log(req.body);

	db.query("SELECT * FROM users", async (error, result) => {
		if (error) {
			console.log(error);
		} else {
			await bcrypt.hash(password, 10, (err, hashPassword) => {
				db.query(
					"INSERT INTO users (user_name, password) VALUES (? ,? )",
					[user_name, hashPassword],
					(error, result) => {
						if (error) {
							console.log(error);
						} else {
							res.json(result);
						}
					}
				);
			});
		}
	});
};

exports.login = (req, res) => {
	const user_name = req.body.user_name;
	const password = req.body.password;

	db.query(
		"SELECT * FROM users WHERE user_name = ? ",
		[user_name],
		async (error, result) => {
			if (error) {
				return console.log(error);
			}
			if (result.length > 0) {
				await bcrypt.compare(password, result[0].password, (err, pass) => {
					if (pass) {
						// return res.status(200).json({
						// 	message: "login sussessful",
						// });
						res.redirect("admin.html");
					} else {
						return res.json({ error: result });
					}
				});
			} else {
				return res.json({ error: "please enter the correct username" });
			}
		}
	);
};

exports.renderLogin = (req, res) => {
	res.sendFile(path.join(__dirname, "../index.html"));
};
