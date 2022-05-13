import React from 'react';

function MovieReview({ review }) {
  return (
    <tr>
      <td className='WilsonCard'>
        <img src={review.Poster} alt={review.Title} />
      </td>
      <td>{review.Year}</td>
      <td>{review.Title}</td>
      <td>{review.Review}</td>
      <td>{review.Rating}</td>
    </tr>
  );
}

export default MovieReview;
