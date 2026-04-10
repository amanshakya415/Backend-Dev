import { getAllBooks } from "../model/booksModel.js";

export const getBooks = (req, res) => {
  let books = getAllBooks();

  const { author, year } = req.query;

  // filter by author
  if (author) {
    books = books.filter(b =>
      b.author.toLowerCase().includes(author.toLowerCase())
    );
  }

  // filter by year
  if (year) {
    books = books.filter(b => b.year == year);
  }

  res.json(books);
};