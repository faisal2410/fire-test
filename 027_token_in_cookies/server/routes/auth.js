import express from "express";
import { currentUser } from "../controllers/auth";

const router = express.Router();

router.post("/current-user", currentUser);

module.exports = router;
