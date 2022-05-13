import React from "react";
import MovieReview from "./MovieReview";

function MovieReviewList({ movieReviews }) {
  console.log(movieReviews);
  return (
    <table>
      <tbody>
        <tr>
          <th>
            <h3>Movie Poster</h3>
          </th>
          <th>
            <h3>Movie Year</h3>
          </th>
          <th>
            <h3>Title</h3>
          </th>
          <th>
            <h3>Review</h3>
          </th>
          <th>
            <h3>Rating</h3>
          </th>
        </tr>
        {movieReviews.map((review) => {
          return <MovieReview key={review.id} review={review} />;
        })}
      </tbody>
    </table>
  );
}

export default MovieReviewList;
