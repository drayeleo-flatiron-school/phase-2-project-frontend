import SearchBar from "./SearchBar.js";
import Highlight from "./Highlight";
import { useState } from "react";

function HomePage({ movies }) {
  // console.log("movies passed into HomePage: ", movies);

  const [displaySearch, setDisplaySearch] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");

  function buildHighlight() {
    const index = Math.floor(Math.random() * movies.length);
    const highlightedMovie = movies[index];

    return (
      <Highlight
        highlightedMovie={highlightedMovie}
        displaySearch={displaySearch}
      />
    );
  }

  function buildSearchResults() {
    const movieToDisplay = movies.find((movie) =>
      movie.Title.toLowerCase().includes(searchPhrase.toLowerCase())
    );
    // console.log("movieToDisplay: ", movieToDisplay);

    if (movieToDisplay) {
      return (
        <Highlight
          highlightedMovie={movieToDisplay}
          displaySearch={displaySearch}
        />
      );
    } else {
      return <h2>No movies match your search!</h2>;
    }
  }

  function handleSearch(input) {
    if (input !== "") {
      // console.log("searched: ", input);
      setSearchPhrase(input);
      setDisplaySearch(true);
    } else {
      // console.log("Cleared Search (app)");
      setSearchPhrase("");
      setDisplaySearch(false);
    }
  }

  return (
    <div className="HomePage">
      <SearchBar handleSearch={handleSearch} />
      {displaySearch ? buildSearchResults() : buildHighlight()}
    </div>
  );
}

export default HomePage;
