const express = require("express");
const router = express.Router();
const {
  addUser,
  getData,
  getAllMentors,
  getAllBootcampers,
  addTopFive,
} = require("../db/models/models.js");

router.post("/", async function (req, res) {
  const personObject = req.body;
  const result = await addUser(personObject);
  res.json({ success: true, payload: result });
});

router.get("/", async function (req, res) {
  const result = await getData();
  console.log(result);
  res.json({ success: true, payload: result });
});

router.get("/mentors", async function (req, res) {
  const result = await getAllMentors();
  console.log(result);
  res.json({ success: true, payload: result });
});

router.get("/bootcampers", async function (req, res) {
  const result = await getAllBootcampers();
  console.log(result);
  res.json({ success: true, payload: result });
});

router.patch("/", async function (req, res) {
  const topFiveObject = req.body;
  const result = await addTopFive(topFiveObject);
  res.json({ success: true, payload: result });
});

module.exports = router;
