const { query } = require("../index");

const sqlStatement = `DROP TABLE mentors_and_bootcampers`;

async function dropTable() {
  const result = await query(sqlStatement);
  console.log("table deleted");
}

dropTable();
