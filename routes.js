import express from "express";
import { getAllLaunches } from "./controller.js";

const router = express.Router();

router.get("/", getAllLaunches);

export default router;
