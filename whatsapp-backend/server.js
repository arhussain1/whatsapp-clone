import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ChatsRouter from "./routes/chats.js";
import MessagesRouter from "./routes/messages.js";
import UsersRouter from "./routes/users.js";
import MediaRouter from "./routes/media.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 8000;

app.use(express.json({ limit: "50mb" }));

const mongodbUri = process.env.MONGODB_URI ?? "";

mongoose.connect(mongodbUri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// routes
app.get("/", (req, res) => res.status(200).send("Hello World"));
app.use("/chats", ChatsRouter);
app.use("/messages", MessagesRouter);
app.use("/users", UsersRouter);
app.use("/media", MediaRouter);

app.listen(port, () => console.log(`Listening on localhost:${port}`));
