// routes/userRoutes.js
import express from "express";
import {
  getUsers,
  createUser,
  deleteUsers,
} from "../controllers/userController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - users
 *     summary: Retrieve a list of users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   firstName:
 *                     type: string
 *                   lastName:
 *                     type: string
 */
router.get("/users", authenticateToken, getUsers);

/**
 * @swagger
 * /api/users:
 *   post:
 *     tags:
 *       - users
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
 *     tags:
 *       - users
 *     summary: Delete all users
 *     responses:
 *       204:
 *         description: No content.
 */
router.delete("/users", deleteUsers);

export default router;
