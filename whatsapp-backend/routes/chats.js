import express from "express";
import ChatsController from "../controllers/chats.js";

const router = express.Router();

router.get("/", ChatsController.Index);
router.post("/", ChatsController.Create);

export default router;
