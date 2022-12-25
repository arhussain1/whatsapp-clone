import express from "express";
import MessagesController from "../controllers/messages.js";

const router = express.Router();

router.post("/", MessagesController.Create);

export default router;
