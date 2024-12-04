import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const BookDetails = () => {
  const { id } = useParams();
  const booksFromLocalStorage = JSON.parse(localStorage.getItem("books")) || [];
  const books = useSelector((state) => state.books.list);
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Combine books from Redux and local storage
    const allBooks = [...books, ...booksFromLocalStorage];
    // Find the book matching the ID
    const foundBook = allBooks.find((book) => String(book.id) === id);
    setBook(foundBook);
  }, [id, books, booksFromLocalStorage]);

  if (!book) {
    return (
      <div className="text-center mt-16">
        <h1 className="text-3xl font-bold">Book Not Found</h1>
        <p className="text-gray-600">
          The book you're looking for doesn't exist.
        </p>
        <Link
          to="/browse-books"
          className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Back to Browse
        </Link>
      </div>
    );
  }

  const { cover, title, author, description, rating, category } = book;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <img
        src={cover}
        alt={title}
        className="w-full h-64 object-cover rounded-md"
      />
      <h2 className="text-3xl font-bold mt-4">{title}</h2>
      <p className="text-gray-700 text-lg mt-2">Author: {author}</p>
      <p className="text-gray-600 text-md mt-2">Category: {category}</p>
      <p className="text-gray-800 text-md mt-4">{description}</p>
      {rating && (
        <p className="text-yellow-500 text-lg mt-4">Rating: {rating} / 5</p>
      )}

      <div className="mt-6 flex justify-between">
        <Link
          to="/browse-books"
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Back to Browse
        </Link>
        <Link
          to="/home"
          className="inline-block bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default BookDetails;
