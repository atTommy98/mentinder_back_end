const { query } = require("../index");

async function deletePerson(id) {
  const sqlStatement = `DELETE FROM mentors_and_bootcampers WHERE user_id=$1`;
  const result = await query(sqlStatement, [id]);
}

deletePerson();
