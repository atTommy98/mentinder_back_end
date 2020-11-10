const { query } = require("../index");

const sqlStatement = `CREATE TABLE IF NOT EXISTS mentors_and_bootcampers (
    user_id SERIAL PRIMARY KEY,
    firstname TEXT,
    lastname TEXT,
    email TEXT,
    company TEXT,
    job TEXT,
    role TEXT,
    gender TEXT,
    bio TEXT,
    frontend TEXT,
    backend TEXT,
    gamedev TEXT,
    ux TEXT,
    security TEXT,
    databases TEXT,
    projectmanagement TEXT,
    devops TEXT,
    testing TEXT,
    education TEXT,
    finance TEXT,
    infrastructure TEXT,
    foodanddrink TEXT,
    gaming TEXT,
    sportandfitness TEXT,
    music TEXT,
    reading TEXT,
    films TEXT
)`;

async function createTable() {
  const result = await query(sqlStatement);
  console.log(result);
}
createTable();
