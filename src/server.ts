import app from "./app";
import config from "./config";
require("dotenv").config();
const mongoose = require("mongoose");

async function server() {
  try {
    await mongoose.connect(config.databaseConnectionUrl);
    console.log("Db Connected");
  } catch (error) {
    console.log("Db Not Connected");
  }
}
server().catch((err) => console.log(err));

app.listen(config.PORT, () => {
  console.log(`Example app listening on port ${config.PORT}`);
});
