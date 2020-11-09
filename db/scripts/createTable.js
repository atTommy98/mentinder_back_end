const { query } = require('../index')

const sqlStatement = 
`CREATE TABLE IF NOT EXISTS mentors_and_bootcampers (
    user_id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    company TEXT,
    job TEXT,
    gender TEXT,
    bio TEXT,
    motivation TEXT,
    photo TEXT,
    game_development TEXT,
    finance TEXT,
    ux TEXT,
    databases TEXT,
    front_end TEXT,
    back_end TEXT,
    project_management TEXT,
    infrastructure TEXT,
    devops TEXT,
    testing TEXT,
    education TEXT,
    security TEXT,
    food_and_drink TEXT,
    gaming TEXT,
    sport_and_fitness TEXT,
    music TEXT,
    reading TEXT,
    films TEXT
)`;

async function createTable(){
    const result = await query(sqlStatement);
    console.log(result);
}
createTable()