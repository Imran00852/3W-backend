import express from "express";
import {signupController,getAllUsers} from "../controllers/user.js";
import {upload} from "../features/uploadImages.js"

const router = express.Router();

router.post("/signup",upload.array("image",5),signupController);
router.get("/users",getAllUsers);

export default router;
