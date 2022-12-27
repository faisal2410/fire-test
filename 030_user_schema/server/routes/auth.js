import express from "express";
import { currentUser, privateRoute } from "../controllers/auth";

const router = express.Router();

router.post("/current-user", currentUser);
router.get("/private-route", privateRoute);

module.exports = router;
