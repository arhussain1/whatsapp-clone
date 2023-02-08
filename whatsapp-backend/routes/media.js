import express from "express";
import MediaController from "../controllers/media.js";
import { uploadFile } from "../s3.js";

const router = express.Router();

// Option 1
// we are making the decision to remove the folder structure prefix
// on the file key stored in S3, this allows us to pass the remaining key
// as the url param and this can be used to fetch the file from aws

// Option 2
// ALTERNATIVE would be to remove all folder structures entirely, all file
// keys would be unique (very unlikely that someone would save a file of the
// same name at the same time)
// we could still add a custom object which could contain a tag or identifier
// such as image, profile-image, file, video. If we wanted to do that in the future
// we can add this later.

// choosing Option 2 as is makes it easier to create cleaner CRUD routes
// and with custom attributes I can still add identifiers in the future
// if I find its needed

// this get route is great for getting one image
// but its not able to take an array of keys and return an array of files

// What might be better is to create a post route instead which accepts keys
// as an array and returns an array of images

// but for the time being we can just create a function on the frontend
// that handles the boilerplate to request an image and we can just iterate
// through an array of keys there. This gives more control on the frontend.

router.get("/:key", MediaController.GetFile);
router.post("/", uploadFile().single("file"), MediaController.SendFile);

export default router;
