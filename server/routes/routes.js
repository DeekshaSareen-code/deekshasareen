const express = require("express");
const userControllers = require("../controllers/user.controller");
const router = express.Router();

const API = "http://3.87.142.56:3000";

router.post("/register",userControllers.register);
router.post("/login",userControllers.login);
router.get(API+"/wallUser", userControllers.getDashboard);
router.post(API+"/like", userControllers.likeUser);
router.post(API+"/insertUser", userControllers.insertUser);
router.post(API+"/connections", userControllers.getConnection);
module.exports = router;
