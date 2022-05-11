import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

function SearchBar({ searchInput, onSearchChange }) {

  return ( 
  <div className="SearchBar">
    SearchBar
    <input 
      value={searchInput}
      onChange={(e) => onSearchChange(e.target.value)}
      type="text"
      placeholder="Search by Title"
      />
  
    <Button variant="outlined" size="small">
      <NavLink className="button" exact to="/search">
        Search
      </NavLink>
    </Button>
    </div>
  );
}


export default SearchBar;

// searchInput={searchInput} setSearchInput={setSearchInput}