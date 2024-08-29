// routes/postRoutes.js
import express from "express";
import {
  getPosts,
  createPost,
  deletePost,
} from "../controllers/postController.js";

const router = express.Router();

/**
 * @swagger
 * /api/posts:
 *   get:
 *     tags:
 *       - posts
 *     summary: Retrieve a list of posts
 *     responses:
 *       200:
 *         description: A list of posts.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   content:
 *                     type: string
 *                   userId:
 *                     type: integer
 */
router.get("/posts", getPosts);

/**
 * @swagger
 * /api/posts:
 *   post:
 *     tags:
 *       - posts
 *     summary: Create a new post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               userId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: The created post.
 */
router.post("/posts", createPost);

/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     tags:
 *       - posts
 *     summary: Delete a post by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: No content.
 */
router.delete("/posts/:id", deletePost);

export default router;
