const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// middleware
app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");

// database connection
const dbURI = `mongodb+srv://admin96:${process.env.DB_PW}@cluster0-iyseq.gcp.mongodb.net/NodeAuth?retryWrites=true&w=majority`;
mongoose
	.connect(dbURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then((result) => app.listen(3000))
	.catch((err) => console.log(err));

// routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", (req, res) => res.render("smoothies"));
