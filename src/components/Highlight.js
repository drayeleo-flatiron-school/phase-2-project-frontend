function Highlight({ highlightedMovie, displaySearch }) {
  console.log(highlightedMovie);

  if (highlightedMovie) {
    return (
      <div className="page">
        <h2 className="pageTitle">
          {displaySearch ? "Search Result:" : "Highlighted Movie"}
        </h2>
        <div className="highlightCard">
          <img src={highlightedMovie.Poster} alt={highlightedMovie.Title} />
          <h3>{highlightedMovie.Title}</h3>
          <p>{highlightedMovie.Year}</p>
          <p>{highlightedMovie.Plot}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Highlight;
