// models/db.js
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("hospital", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

async function connectDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Foiiiiii");
  } catch (error) {
    throw new Error("Bota isso no chatGPT:", error)
  }
}
connectDatabase();
module.exports = sequelize;
