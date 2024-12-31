const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.status(401).json({ success: false, message: "Access denied" });
  }
};
