const Pool = require("pg").Pool;

const pool = new Pool({
  host: '127.0.0.1',
  user: "postgres",
  password: "12345",
  port: 5432,
  database: "authreact"
});

module.exports = pool;
