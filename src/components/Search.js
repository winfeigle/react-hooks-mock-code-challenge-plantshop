import React, { useState } from "react";

function Search({ onSearch }) {
const [search, setSearch] = useState("");

onSearch(search)


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
