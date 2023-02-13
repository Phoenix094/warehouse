const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const dotenv = require("dotenv");
const session = require("express-session");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("./frontend/assets", express.static("assets"));

dotenv.config("./.env");

const db = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
});

db.connect((error) => {
	if (error) {
		console.log(error);
	} else {
		console.log("Connted to mySql");
	}
});

path.join(__dirname, "./index.html");

// express session
app.use(
	session({
		secret: "your secret key",
		resave: false,
		saveUninitialized: false,
	})
);

const PORT = 5000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

app.use("/", require("./routes/routes"));
