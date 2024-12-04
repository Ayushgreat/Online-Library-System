import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-sky-800 via-sky-700 to-sky-900 text-white py-6 mt-10">
      <div className="container mx-auto text-center space-y-4">
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-sky-400 transition duration-300"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-sky-400 transition duration-300"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-sky-400 transition duration-300"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ayush Namdeo. All Rights Reserved.
        </p>
        <p className="text-xs text-gray-300">
          Built with ❤️ By Ayush Namdeo
        </p>
      </div>
    </footer>
  );
};

export default Footer;
