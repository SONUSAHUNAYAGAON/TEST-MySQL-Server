require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");

const app = express();
const PORT = process.env.PORT || 8080;

// MySQL Connection
const db = mysql.createConnection({
  // host: process.env.DB_HOST,
  socketPath: `/cloudsql/midyear-arcade-448215-b1:asia-south1:sonumysqltest3715`, // Replace with your instance connection name
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
// Express Routes
app.get("/", (req, res) => {
  res.send("Server is running!");
});
db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
    return;
  }
  console.log("Connected to MySQL database");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
