const express = require("express");
const UserRouter = express.Router();

const { registerUser, loginUser } = require("../controllers/userController");

UserRouter.post("/register", registerUser);
UserRouter.post("/login", loginUser);

module.exports = UserRouter;
