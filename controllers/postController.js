// controllers/postController.js
import Post from "../models/post.js";
import User from "../models/user.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: User,
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, content, userId } = req.body;
    const newPost = await Post.create({ title, content, userId });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: "Failed to create post" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await Post.destroy({ where: { id } });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete post" });
  }
};
