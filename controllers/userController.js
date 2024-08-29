// controllers/userController.js
import User from "../models/user.js";

/**
 * Controller to get all users
 */
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

/**
 * Controller to create a new user
 */
export const createUser = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    const newUser = await User.create({ firstName, lastName });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

/**
 * Controller to delete all users
 */
export const deleteUsers = async (req, res) => {
  try {
    await User.destroy({ where: {}, truncate: true });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete users" });
  }
};
