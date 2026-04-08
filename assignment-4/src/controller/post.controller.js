import {
  getPosts,
  getPostById,
  createPost
} from "../model/post.model.js";

export const showPosts = (req, res) => {
  res.render("posts", { posts: getPosts() });
};

export const showSinglePost = (req, res) => {
  const post = getPostById(req.params.id);
  res.render("post", { post });
};

export const showCreateForm = (req, res) => {
  res.render("create");
};

export const addPost = (req, res) => {
  const { title, content } = req.body;
  createPost(title, content);
  res.redirect("/posts");
};