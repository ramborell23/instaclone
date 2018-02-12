var pgp = require("pg-promise")({});
var connectionString = "postgres://localhost/userlist2";
var db = pgp(connectionString);

module.exports = db;
  