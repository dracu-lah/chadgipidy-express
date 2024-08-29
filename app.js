// app.js
import express from "express";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import sequelize from "./config/database.js";
import setupSwagger from "./docs/swagger.js";

const app = express();

app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", postRoutes);

// Setup Swagger
setupSwagger(app);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");
    await sequelize.sync({ force: true });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app;
