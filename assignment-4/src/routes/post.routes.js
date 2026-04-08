import express from "express";
import {
  showPosts,
  showSinglePost,
  showCreateForm,
  addPost
} from "../controller/post.controller.js";

const router = express.Router();

router.get("/", showPosts);
router.get("/create", showCreateForm);
router.post("/create", addPost);
router.get("/:id", showSinglePost);

export default router;