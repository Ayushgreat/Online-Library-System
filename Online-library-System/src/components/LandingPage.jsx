import React from "react";
import BookCategories from "./BookCategories";

const LandingPage = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col justify-between">
      <section className="text-center py-16 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 leading-tight">
          Welcome to the <span className="text-purple-600">World of Knowledge</span>
        </h2>
        <p className="text-base md:text-lg text-gray-700 mt-6 max-w-2xl mx-auto">
          Dive into a vast collection of books across various genres. 
          Whether you're here to learn or escape, there's something special waiting for you.
        </p>
      </section>

      <section className="mt-12 px-4">
        <BookCategories />
      </section>
    </div>
  );
};

export default LandingPage;
