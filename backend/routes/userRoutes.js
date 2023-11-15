import express from "express";
import { deleteUser,signupUser,loginUser,logoutUser,followUnFollowUser,updateUser, getUserProfile,} from "../controllers/userController.js";
import protectRoute from "../middlewares/protectRoute.js";
import protectRouteAdmin from "../middlewares/protectRouteAdmin.js";
const router=express.Router();

router.get("/profile/:username",getUserProfile)
router.post("/signup",signupUser)
router.post("/login",loginUser)
router.post("/logout",logoutUser)
router.post("/follow/:id",protectRoute, followUnFollowUser) 
router.put("/update/:id",protectRoute, updateUser)
router.delete("/delete/:id",protectRouteAdmin,deleteUser)

export default router;