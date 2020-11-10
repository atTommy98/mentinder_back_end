const express = require("express");
const router = express.Router();
const { populateTable } = require("../db/models/models.js");

router.post('/', async function (req, res) {
    const {data} = req.body;
    const result = await populateTable(data);
    res.json({success: true, payload: result})
})

module.exports = router