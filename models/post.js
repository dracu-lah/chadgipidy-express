// models/post.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./user.js";

const Post = sequelize.define("Post", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
    allowNull: false,
  },
});

// Define associations
User.hasMany(Post);
Post.belongsTo(User);

export default Post;
