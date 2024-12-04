import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PopularBooks = () => {
  // Getting recently added books and reversing the list for the latest first
  const books = useSelector((state) => state.books.list.slice().reverse());

  // Render only popular books
  return (
    <section className="my-12 bg-gradient-to-r from-blue-50 to-purple-50 py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-purple-700">
        Popular Books
      </h2>
      <p className="text-center text-gray-600 mt-2">
        Discover our most loved books by readers like you!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {books
          .filter((book) => book.popular)
          .map((book) => (
            <div
              key={book.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-blue-800">
                  {book.title}
                </h3>
                <p className="text-gray-600 mt-1">
                  {book.author || "Unknown Author"}
                </p>
                <Link
                  to={`/book-details/${book.id}`}
                  className="inline-block mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-500 transition duration-300"
                >
                 View More Details
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default PopularBooks;
