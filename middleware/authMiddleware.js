// middleware/authMiddleware.js
import jwt from "jsonwebtoken";

// Replace with your actual secret key
const SECRET_KEY = "your_secret_key";

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Extract token from Bearer scheme

  if (token == null)
    return res.status(401).json({ error: "No token provided" });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ error: "Forbidden" });
    req.user = user;
    next();
  });
};

export default authenticateToken;
