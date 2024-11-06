let express = require("express");
let app = new express();
let path = require("path");

app.set("view engine", "ejs");

// set up database connection
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "milestone3take1-databaseserver-xxc6tb9enwjv.cfsse0o0k0rj.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "Dishsoap5",
    database: "cake",
    port: 3306,
  },
});

app.get("/", (req, res) => {
  knex
    .select()
    .from("types")
    .then((result) => {
      console.log(result);
      res.render("index", { cakeList: result });
    });
});

app.listen(3000);
