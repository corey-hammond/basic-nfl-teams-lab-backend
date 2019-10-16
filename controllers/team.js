const express = require("express");
const router = express.Router();

const Team = require("../models/Team");

router.get("/teams", (req, res) => {
  Team.find({}).then(team => {
    res.json(team);
  });
});

router.get("/teams/:abv", (req, res) => {
  Team.findOne({ abv: req.params.abv }).then(team => {
    res.json(team);
  });
});

module.exports = router;
