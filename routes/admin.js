import express from "express";
import adminController from "../controllers/admin.js";
const router = express.Router();

router.post("/admin",adminController);

export default router;