import { useEffect, useRef, useState } from "react";
// import HighlightCard from "./HighlightCard";

function Highlight({ highlightedMovie }) {
  // function buildHighlightCard() {
  //   return (
  //     <div className="highlightCard">
  //       <img src={highlightedMovie.Poster} alt={highlightedMovie.Title} />
  //       <h3>{highlightedMovie.Title}</h3>
  //       <p>{highlightedMovie.Year}</p>
  //     </div>
  //   );
  // }

  return (
    <div>
      <h2>Highlighted Movie</h2>
      {/* <div className="">{highlightedMovie ? buildHighlightCard() : null}</div> */}
      {/* <div className="">{buildHighlightCard()}</div> */}
      <div className="highlightCard">
        <img src={highlightedMovie.Poster} alt={highlightedMovie.Title} />
        <h3>{highlightedMovie.Title}</h3>
        <p>{highlightedMovie.Year}</p>
      </div>
    </div>
  );
}

export default Highlight;
