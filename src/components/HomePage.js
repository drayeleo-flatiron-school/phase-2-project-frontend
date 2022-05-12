import SearchBar from "./SearchBar.js";
import Highlight from "./Highlight";

function HomePage({ highlightedMovie }) {
  return (
    <div className="HomePage">
      HomePage
      <SearchBar />
      <Highlight highlightedMovie={highlightedMovie} />
    </div>
  );
}

export default HomePage;
