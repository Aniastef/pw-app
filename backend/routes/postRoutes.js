import express from "express";
import {createPost, getPost,deletePost,likeUnlikePost,replyToPost,getFeedPosts, getUserPosts} from "../controllers/postController.js"
import protectRoute from "../middlewares/protectRoute.js"
import isAdmin from "../middlewares/isAdmin.js";

const router=express.Router();

router.get("/feed",protectRoute,getFeedPosts)
router.post("/create",protectRoute,createPost)
router.get("/:id",getPost)
router.get("/user/:username",getUserPosts)

router.delete("/:id",protectRoute,isAdmin,deletePost)
router.put("/like/:id",protectRoute,likeUnlikePost)
router.put("/reply/:id",protectRoute,replyToPost)

export default router;