const express = require("express");
const router = express.Router();
const postController = require("../controllers/postcontroller");
const userController = require("../controllers/usercontroller");
router.post("/addReview", postController.postaddReview);
router.post("/addMessage", postController.postaddMessage);
router.post("/addComment", postController.postaddComment);
router.use(userController.error);
module.exports = router;
