const { query } = require("../index");

const sqlStatement = `SELECT * FROM mentors_and_bootcampers`;

async function getData() {
  const result = await query(sqlStatement);
}
