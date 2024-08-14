import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search stories..."
      className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
    />
  );
};

export default SearchBar;