const { query } = require("../index");

async function getData() {
  const sqlStatement = `SELECT * FROM mentors_and_bootcampers`;
  const result = await query(sqlStatement);
}

async function populateTable(array) {
  console.log(array);
  const sqlStatement = `INSERT INTO mentors_and_bootcampers (
    firstname,
    lastname,
    email,
    company,
    job,
    role,
    gender,
    bio,
    frontend,
    backend,
    gamedev,
    ux,
    security,
    databases,
    projectmanagement,
    devops,
    testing,
    education,
    finance,
    infrastructure,
    foodanddrink,
    gaming,
    sportandfitness,
    music,
    reading,
    films )
    
        VALUES (
            $1,
            $2,
            $3,
            $4,
            $5,
            $6,
            $7,
            $8,
            $9,
            $10,
            $11,
            $12,
            $13,
            $14,
            $15,
            $16,
            $17,
            $18,
            $19,
            $20,
            $21,
            $22,
            $23,
            $24,
            $25,
            $26
            )
        
        RETURNING *
    `;
  array.forEach(async function tableRows(personObject) {
    let values = [
      personObject.firstname,
      personObject.lastname,
      personObject.email,
      personObject.company,
      personObject.job,
      personObject.role,
      personObject.gender,
      personObject.bio,
      personObject.frontend,
      personObject.backend,
      personObject.gamedev,
      personObject.ux,
      personObject.security,
      personObject.databases,
      personObject.projectManagement,
      personObject.devops,
      personObject.testing,
      personObject.education,
      personObject.finance,
      personObject.infrastructure,
      personObject.foodAndDrink,
      personObject.gaming,
      personObject.sportAndFitness,
      personObject.music,
      personObject.reading,
      personObject.films,
    ];
    const result = await query(sqlStatement, values);
    console.log(result);
  });
}

async function getAllMentors() {
  const sqlStatement = `SELECT * FROM mentors_and_bootcampers WHERE role = mentor`;
  const result = await query(sqlStatement);
}

async function getAllBootcampers() {
  const sqlStatement = `SELECT * FROM mentors_and_bootcampers WHERE role = bootcamper`;
  const result = await query(sqlStatement);
}

module.exports = { getData, populateTable, getAllMentors, getAllBootcampers };
