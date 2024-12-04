import { categories } from "../utils/Books";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../schema";
import { useDispatch } from "react-redux";
import { addNewBook } from "../redux/bookSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      author: "",
      category: "",
      cover: "",
      description: "",
      rating: "",
      popular: false,
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    try {
      // Add the new book to local storage
      const booksFromLocalStorage = JSON.parse(localStorage.getItem("books")) || [];
      booksFromLocalStorage.push(formData);
      localStorage.setItem("books", JSON.stringify(booksFromLocalStorage));

      // Dispatch action to Redux store
      dispatch(addNewBook(formData));

      // Redirect to browse page
      navigate("/browse-books");
    } catch (error) {
      console.error("Failed to add new book: ", error);
    }
  };

  return (
    <div className="my-12">
      <h2 className="text-4xl font-bold text-center text-gray-800">Add a New Book</h2>
      <p className="text-center text-gray-600 mt-4">
        Use the form below to add a new book to our collection.
      </p>
      <div className="max-w-lg mx-auto mt-8">
        <form
          className="bg-gradient-to-r from-white to-gray-100 shadow-lg rounded-lg p-8 space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          {[
            { name: "title", label: "Title", type: "text", placeholder: "Book Title" },
            { name: "author", label: "Author", type: "text", placeholder: "Author Name" },
            { name: "cover", label: "Book Cover URL", type: "text", placeholder: "Cover Image URL" },
            {
              name: "rating",
              label: "Rating",
              type: "number",
              placeholder: "Rate from 1 to 5",
            },
          ].map(({ name, label, type, placeholder }) => (
            <div key={name} className="space-y-1">
              <label className="block text-gray-700 text-sm font-bold">{label}</label>
              <Controller
                name={name}
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type={type}
                    placeholder={placeholder}
                    className="w-full p-3 rounded border focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                )}
              />
              {errors[name] && (
                <p className="text-red-500 text-sm">{errors[name].message}</p>
              )}
            </div>
          ))}

          <div className="space-y-1">
            <label className="block text-gray-700 text-sm font-bold">Genre</label>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full p-3 rounded border focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Select Genre</option>
                  {categories.map(
                    (category, index) =>
                      category !== "All" && (
                        <option key={index} value={category}>
                          {category}
                        </option>
                      )
                  )}
                </select>
              )}
            />
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <label className="block text-gray-700 text-sm font-bold">
              Description
            </label>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  placeholder="Description..."
                  className="w-full p-3 rounded border focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ></textarea>
              )}
            />
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description.message}</p>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <label className="text-gray-700 text-sm font-bold">Popular</label>
            <Controller
              name="popular"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600 focus:ring-2 focus:ring-blue-500"
                />
              )}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg rounded shadow-lg transition-all focus:ring-2 focus:ring-blue-400"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
