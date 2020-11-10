const { query } = require("../index");

const sqlStatement = `SELECT * FROM mentors_and_bootcampers`;

async function readTable() {
  const result = await query(sqlStatement);
  console.log(result);
}

readTable();
