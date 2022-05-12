function HighlightCard({ highlight }) {
  return (
    <div className="WilsonCard">
      <img src={highlight.Poster} alt={highlight.Title} />
      <h3>{highlight.Title}</h3>
      <p>{highlight.Year}</p>
      <p></p>
    </div>
  );
}

export default HighlightCard;
