import express from "express";
import booksRoutes from "./src/routes/booksRoutes.js";

const app = express();

// Routes
app.use("/books", booksRoutes);


app.get("/", (req, res) => {
  res.send("Books API Running ");
});


app.use((req, res) => {
  res.status(404).send("Route not found");
});

//  server start
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});