// components/Search.tsx
"use client";
import React, { useState } from "react";

// Generic Search Component that works with any type of item
interface SearchProps<T> {
  items: T[];
  onSearch: (filteredItems: T[]) => void;
}

const Search = <T extends { name: string }>({ items, onSearch }: SearchProps<T>) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter items based on the search term
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    onSearch(filteredItems);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
