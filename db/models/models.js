const { query } = require("../index");

async function getData() {
  const sqlStatement = `SELECT * FROM mentors_and_bootcampers`;
  const result = await query(sqlStatement);
}

async function populateTable(array) {
  console.log(array);
  const sqlStatement = `INSERT INTO mentors_and_bootcampers (
        name ,
        bootcamper,
        email ,
        company ,
        job ,
        gender ,
        bio ,
        motivation ,
        photo ,
        game_development ,
        finance ,
        ux ,
        databases ,
        front_end ,
        back_end ,
        project_management ,
        infrastructure ,
        devops ,
        testing ,
        education ,
        security ,
        food_and_drink ,
        gaming ,
        sport_and_fitness ,
        music ,
        reading ,
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
            $26,
            $27
        )
        
        RETURNING *
    `;
  array.forEach(async function tableRows(personObject) {
    let values = [
      personObject.name,
      personObject.bootcamper,
      personObject.email,
      personObject.company,
      personObject.job,
      personObject.gender,
      personObject.bio,
      personObject.motivation,
      personObject.photo,
      personObject.gameDevelopment,
      personObject.finance,
      personObject.ux,
      personObject.databases,
      personObject.frontEnd,
      personObject.backEnd,
      personObject.projectManagement,
      personObject.infrastructure,
      personObject.devops,
      personObject.testing,
      personObject.education,
      personObject.security,
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

module.exports = { getData, populateTable };
