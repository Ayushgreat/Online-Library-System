import { categories } from "../utils/Books";
import { Link } from "react-router-dom";

const BookCategories = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Book Categories</h2>
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 mt-4">
        {categories.map(
          (category) =>
            category !== "All" && (
              <Link
                key={category}
                to={`/browse-books/${category}`}
                className="bg-gray-100 p-4 rounded shadow hover:bg-gray-200 transition-colors"
              >
                <h3 className="text-xl font-semibold">{category}</h3>
              </Link>
            )
        )}
      </section>
    </div>
  );
};

export default BookCategories;
