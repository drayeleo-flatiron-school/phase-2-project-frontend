import React, { useState, useEffect } from "react";
import MovieReviewForm from "./MovieReviewForm";
import MovieReviewList from "./MovieReviewList";

function MovieReviews() {
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movieReviews")
      .then((response) => response.json())
      .then((movieReviews) => setMovieReviews(movieReviews));
  }, []);

  console.log(movieReviews);

  function addMovieReview(newMovie) {
    console.log("called addMovieReview: ", newMovie);
    setMovieReviews([...movieReviews, newMovie]);
  }

  return (
    <>
      <MovieReviewForm addMovieReview={addMovieReview} />
      <MovieReviewList movieReviews={movieReviews} />
    </>
  );
}

export default MovieReviews;
