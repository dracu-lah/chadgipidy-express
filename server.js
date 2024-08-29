import express from "express";
import { DataTypes, Sequelize } from "sequelize";
const app = express();
const port = 3000;

const sequelize = new Sequelize("sqlite::memory:"); // Example for sqlite
app.get("/", (req, res) => {
  res.send("Hello World!");
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  },
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
