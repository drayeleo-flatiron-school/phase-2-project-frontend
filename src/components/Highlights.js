import { useEffect, useState } from "react";
import HighlightCard from "./HighlightCard";

function Highlights() {
  const [highlights, setHighlights] = useState([]);
  const url =
    // "https://owen-wilson-wow-api.herokuapp.com/wows/random?results=20";
    "http://localhost:3000/movies";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHighlights(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  function buildCards() {
    return highlights.map((highlight, index) => (
      <HighlightCard key={index} highlight={highlight} /> //change "index" to
    ));
  }

  return (
    <div>
      <h3>Highlights</h3>
      <div className="WilsonCardSection">{buildCards()}</div>
    </div>
  );
}

export default Highlights;
