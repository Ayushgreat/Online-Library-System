import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { categories } from "../utils/Books";

const BrowseBooks = () => {
  // Retrieve books from Redux and localStorage
  const booksFromRedux = useSelector((state) => state.books.list);
  const booksFromLocalStorage =
    JSON.parse(localStorage.getItem("books")) || [];

  // Merge both sources of books
  const allBooks = [...booksFromRedux, ...booksFromLocalStorage];

  const { category: categoryFromParams } = useParams(); // Get category from URL params
  const [booksByCategory, setBooksByCategory] = useState(allBooks);
  const [search, setSearch] = useState("");

  // Effect to filter books by category
  useEffect(() => {
    let filteredBooks = allBooks;

    if (categoryFromParams && categoryFromParams !== "All") {
      filteredBooks = allBooks.filter(
        (book) =>
          book.category.toLowerCase() === categoryFromParams.toLowerCase()
      );
    }

    setBooksByCategory(filteredBooks);
  }, [categoryFromParams, allBooks]); // Only depend on categoryFromParams and allBooks

  // Search filter
  const filteredBooks = booksByCategory.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-cover bg-no-repeat bg-center flex items-center justify-center h-64"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAevn2o1ilMjUTaO9rY1I_kd8qFlVbTaNaBw&s')",
        }}
      >
        <section className="text-center bg-black bg-opacity-40 p-6 rounded-lg">
          <h1 className="text-5xl font-extrabold text-white">Browse Books</h1>
          <p className="text-xl text-gray-200 mt-4">
            Dive into a world of knowledge and adventure with our curated
            collection of books.
          </p>
        </section>
      </div>

      {/* Categories and Search */}
      <section className="my-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <ul className="flex flex-wrap justify-center md:justify-start gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/browse-books/${category}`}
                className={`px-4 py-2 rounded-full text-sm md:text-lg font-medium transition ${
                  category === categoryFromParams
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-600 hover:bg-blue-500 hover:text-white"
                }`}
              >
                {category}
              </Link>
            ))}
          </ul>
          <div className="w-full md:w-1/4 mt-4 md:mt-0">
            <input
              type="text"
              className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Search by title or author"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredBooks.map((book) => (
            <div
              key={book.id || `${book.title}-${book.author}`}
              className="shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600">{book.author}</p>
                <Link
                  to={`/book-details/${book.id}`}
                  className="text-blue-500 hover:underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BrowseBooks;
