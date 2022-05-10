function WilsonCard({ movie }) {
  function handleClick() {
    // console.log(movie.audio);
    let audio = new Audio(movie.audio);
    audio.play();
  }

  return (
    <div className="WilsonCard" onClick={handleClick}>
      <img alt={movie.movie} src={movie.poster} />
    </div>
  );
}

export default WilsonCard;
