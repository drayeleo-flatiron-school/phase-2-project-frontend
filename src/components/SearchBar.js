import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

function SearchBar({ handleSearch }) {
  const [searchPhrase, setSearchPhrase] = useState("");

  function onSearchChange(input) {
    setSearchPhrase(input);
  }

  function onSubmit() {
    // console.log("searchPhrase: ", searchPhrase);
    handleSearch(searchPhrase);
  }

  function onClearSearch() {
    setSearchPhrase("");
    handleSearch("");
  }

  return (
    <div className="SearchBar">
      <input
        value={searchPhrase}
        onChange={(e) => onSearchChange(e.target.value)}
        type="text"
        placeholder="Search by Title"
      />
      <Button variant="outlined" size="small" onClick={onSubmit}>
        Search
      </Button>
      <Button variant="outlined" size="small" onClick={onClearSearch}>
        Clear Search
      </Button>
    </div>
  );
}

export default SearchBar;

// searchInput={searchInput} setSearchInput={setSearchInput}
