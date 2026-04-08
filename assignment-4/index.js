import express from "express";
import path from "path";


import userRoutes from "./src/routes/user.routes.js";
import postRoutes from "./src/routes/post.routes.js";
import contactRoutes from "./src/routes/contact.routes.js";
import logger from "./src/middleware/logger.js";

const app = express();
app.set("views", path.join(process.cwd(), "src/views"));

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(logger);

// Routes
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/contact", contactRoutes);

// Gallery route
app.get("/gallery", (req, res) => {
  const images = ["img1.jpg", "img2.jpg"];
  res.render("gallery", { images });
});

// 404
app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(3000, () => console.log("Server running on port 3000"));