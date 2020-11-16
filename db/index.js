const { Pool } = require ("pg");

const pool = new Pool ({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
})

module.exports = {
    query: (sql, values, callback)=>{
        return pool.query(sql, values, callback);
    },
};