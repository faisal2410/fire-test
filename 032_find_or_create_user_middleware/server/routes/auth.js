import express from "express";
import {
  currentUser,
  privateRoute,
  findOrCreateUser,
} from "../controllers/auth";

const router = express.Router();

router.post("/current-user", findOrCreateUser, currentUser);
router.get("/private-route", privateRoute);

module.exports = router;
