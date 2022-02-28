"use strict";

const router = require("express").Router()
const homeController = require("../controllers/homeController");

router.get("/", homeController.index);
router.get("/logIn", homeController.logIn);
router.get("/signUp", homeController.signUp);
router.get("/newThread", homeController.newThread);
router.get("/:categoryName", homeController.threadList);


module.exports = router;