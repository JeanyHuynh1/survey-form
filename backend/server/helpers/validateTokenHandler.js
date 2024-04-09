import jwt from "jsonwebtoken";
import config from "../../config/config.js";

const validateToken = async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
        res.status(401).json({message: "User is not authorized"});
      }
      req.user = decoded.user;
      next();
    });

    if (!token) {
      res.status(401).json({message: "User is not authorized or token is missing"});
    }
  }
}

export default {validateToken}