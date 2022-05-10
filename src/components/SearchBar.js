import React from "react";

function SearchBar({ searchInput, setSearchInput }) {
  return ( 
  <div className="SearchBar">
    <input 
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      type="text"
      placeholder="Search by Title"
      />
    
    SearchBar
    </div>
  )
};

{/* <Button variant="outlined" type="submit">
  Outlined
</Button>  */}

export default SearchBar;

// searchInput={searchInput} setSearchInput={setSearchInput}