const mysql = require('mysql');
require("dotenv").config();


const con = mysql.createConnection({
    host: process.env.RDS_ENDPOINT,
    user: process.env.RDS_USER,
    password: process.env.RDS_PASSWORD
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.end();
});