const express = require("express");
const router = express.Router();
const postController = require("../controllers/postcontroller");
router.post("/addReview", postController.postaddReview);
module.exports = router;
