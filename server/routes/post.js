const express = require("express");
const router = express.Router();
const postController = require("../controllers/postcontroller");
const userController = require("../controllers/usercontroller");
router.post("/addReview", postController.postaddReview);
router.post("/addMessage", postController.postaddMessage);
router.post("/addComment", postController.postaddComment);
router.post("/displayMessages", postController.postdisplayMessages);

router.post("/like", postController.postaddLike);
router.post("/dislike", postController.postaddDislike);
router.post("/comment", postController.postaddComment);
router.post("/getReview", postController.displayReview);
router.get("/getReview", postController.getdisplayReview);

router.post("/updateReview", postController.postupdateReview);
router.post("/deleteReview", postController.postdeleteReview);
router.get("/chartCompany", postController.getchartdetails);
router.use(userController.error);
module.exports = router;
