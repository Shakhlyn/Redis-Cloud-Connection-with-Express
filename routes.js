import express from "express";
import { getAllLaunches, getAllRockets } from "./controller.js";

const router = express.Router();

router.get("/launches", getAllLaunches);
router.get("/rockets", getAllRockets);

export default router;
