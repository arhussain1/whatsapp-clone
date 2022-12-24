import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT || 8000;

const mongodbUri = process.env.MONGODB_URI ?? "";

mongoose.connect(mongodbUri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.get("/", (req, res) => res.status(200).send("Hello World"));

app.listen(port, () => console.log(`Listening on localhost:${port}`));
