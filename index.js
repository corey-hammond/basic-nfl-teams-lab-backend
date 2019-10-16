const express = require("express");
const cors = require("cors");

// require controllers
const teamController = require("./controllers/team");

const app = express();

app.use(cors());

app.use("/", teamController);

app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
