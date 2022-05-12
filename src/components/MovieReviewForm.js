import React, { useState } from 'react';

function MovieReviewForm({ addMovieReview }) {
  const [form, setForm] = useState({
    poster: '',
    year: '',
    title: '',
    rating: '',
    review: '',
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(
      'http://localhost:3000/movieReviews',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application.json' },
        body: JSON.stringify(form),
      }
        .then((response) => response.json())
        .then((newMovieReview) => addMovieReview(newMovieReview))
    );
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className='movieReviewForm'>
        <h3>Add Your Movie Reviews!</h3>
        <div>
          <input
            type='text'
            value={form.poster}
            name='poster'
            placeholder='Movie poster URL'
            onChange={handleChange}
          />
          <input
            type='text'
            value={form.year}
            name='year'
            placeholder='Movie year'
            onChange={handleChange}
          />
          <input
            type='text'
            value={form.title}
            name='title'
            placeholder='Movie title'
            onChange={handleChange}
          />
          <input
            type='number'
            value={form.rating}
            name='rating'
            placeholder='Your rating'
            step='1'
            onChange={handleChange}
          />
          <input
            type='text'
            value={form.review}
            name='review'
            placeholder='Your review'
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Add</button>
      </form>
    </section>
  );
}

export default MovieReviewForm;
