import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-800 px-8 md:px-16 lg:px-24 z-50 shadow-lg">
      <div className="py-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl md:text-2xl">
          Jaoying-blog
        </div>
        <div className="flex space-x-6">
          <a
            href="/"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Blogs
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
