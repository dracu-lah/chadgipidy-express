// routes/userRoutes.js
import express from "express";
import {
  getUsers,
  createUser,
  deleteUsers,
} from "../controllers/userController.js";

const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Retrieve a list of users
 *     responses:
 *       200:
 *         description: A list of users.
 */
router.get("/users", getUsers);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *     responses:
 *       201:
 *         description: The created user.
 */
router.post("/users", createUser);

/**
 * @swagger
 * /api/users:
 *   delete:
 *     summary: Delete all users
 *     responses:
 *       204:
 *         description: No content.
 */
router.delete("/users", deleteUsers);

export default router;
