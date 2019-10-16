const mongoose = require('../db/connection')

const TeamSchema = new mongoose.Schema({
    abv: String,
    team: String,
    keyPlayers: String,
    coach: String,
    record: String,
    division: String,
})

const Team = mongoose.model("Team", TeamSchema)
module.exports = Team