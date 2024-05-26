const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();

const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

// Set the view engine to EJS
app.set("view engine", "ejs");

const bodyParser = require("body-parser"); //deals with all kinds of data like json, form etc.
app.use(bodyParser.json()); //sends the data to the req.body
const PORT = process.env.PORT || 3000;

// Import the router files
const userRoutes = require("./routes/userRoutes");
const candidateRoutes = require("./routes/candidateRoutes");

// Use the routers
app.use("/user", userRoutes);
app.use("/candidate", candidateRoutes);

app.get("/user", (req, res) => {
  res.render("user");
});

// Route to render the candidate section
app.get("/candidate", (req, res) => {
  res.render("candidate");
});
app.listen(PORT, () => {
  console.log("listening on port 3000");
});
