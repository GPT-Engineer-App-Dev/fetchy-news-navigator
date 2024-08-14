import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search stories..."
        className="w-full p-4 pl-12 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
};

export default SearchBar;