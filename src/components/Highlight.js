function Highlight({ highlightedMovie }) {
  return (
    <div>
      <h2>Highlighted Movie</h2>
      <div className="highlightCard">
        <img src={highlightedMovie.Poster} alt={highlightedMovie.Title} />
        <h3>{highlightedMovie.Title}</h3>
        <p>{highlightedMovie.Year}</p>
      </div>
    </div>
  );
}

export default Highlight;
