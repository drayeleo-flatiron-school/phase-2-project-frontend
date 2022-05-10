import { useEffect, useState } from "react";
import WilsonCard from "./WilsonCard";

function OwenWilsonFanPage() {
  const [movies, setMovies] = useState([]);

  const url =
    "https://owen-wilson-wow-api.herokuapp.com/wows/random?results=20";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  console.log(movies);

  return (
    <div className="OwenWilsonFanPage">
      {/* <div className="WilsonHeadBackground"> */}
      <h1>OWEN WILSON FANPAGE</h1>
      <h3>A collection of Owen Wilson's greatest moments of awe</h3>
      <h2>Click an image to experience the Wow!!</h2>
      <div className="WilsonCardSection">
        {movies.map((movie) => (
          <WilsonCard key={movie.audio} movie={movie} />
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}

export default OwenWilsonFanPage;
