import React from 'react';

function MovieReview({ review }) {
  return (
    <tr>
      <td>{review.Poster}</td>
      <td>{review.Year}</td>
      <td>{review.Title}</td>
      <td>{review.Review}</td>
      <td>{review.Rating}</td>
    </tr>
  );
}

export default MovieReview;
