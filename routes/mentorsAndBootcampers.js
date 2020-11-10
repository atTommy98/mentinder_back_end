const express = require("express");
const router = express.Router();
const {
  populateTable,
  getData,
  getAllMentors,
  getAllBootcampers,
} = require("../db/models/models.js");

router.post("/", async function (req, res) {
  const {
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
    films,
  } = req.body;
  const result = await populateTable(
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
    films
  );
  res.json({ success: true, payload: result });
});

router.get("/", async function (req, res) {
  const result = await getData();
  console.log(result);
  res.json({ sucess: true, payload: result });
});

router.get("/mentors", async function (req, res) {
  const result = await getAllMentors();
  console.log(result);
  res.json({ sucess: true, payload: result });
});

router.get("/bootcampers", async function (req, res) {
  const result = await getAllBootcampers();
  console.log(result);
  res.json({ sucess: true, payload: result });
});

module.exports = router;
