import express from "express";
import { getMatch, getSingleMatch } from "../controllers/match.js";

const router = express.Router();

router.get("/", getMatch);
router.get("/:id", getSingleMatch);

export default router;
