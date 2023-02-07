const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "#1Pastis51",
  host: "localhost",
  port: 5432,
  database: "pernlogin"
});

module.exports = pool;