const Team = require("../models/Team");
const seedData = require("./seeds.json");

Team.deleteMany({})
  .then(() => {
    return Team.insertMany(seedData);
  })
  .then(() => {
    console.log("got the teams");
    process.exit();
  });
