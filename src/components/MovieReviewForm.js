import React, { useState } from "react";

function MovieReviewForm({ addMovieReview }) {
  const [form, setForm] = useState({
    Poster: "",
    Year: "",
    Title: "",
    Rating: "",
    Review: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    //console.log(form);

    const formData = { ...form, Rating: parseInt(form.Rating) };
    console.log("formData: ", formData);
    console.log("jsonified: ", JSON.stringify(formData));

    fetch("http://localhost:3000/movieReviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    addMovieReview(formData);
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className="movieReviewForm">
        <h3>Add Your Movie Reviews!</h3>
        <div>
          <input
            type="text"
            value={form.Poster}
            name="Poster"
            placeholder="Movie poster URL"
            onChange={handleChange}
          />
          <input
            type="text"
            value={form.Year}
            name="Year"
            placeholder="Movie year"
            onChange={handleChange}
          />
          <input
            type="text"
            value={form.Title}
            name="Title"
            placeholder="Movie title"
            onChange={handleChange}
          />
          <input
            type="number"
            value={form.Rating}
            name="Rating"
            placeholder="Your rating"
            step="1"
            onChange={handleChange}
          />
          <input
            type="text"
            value={form.Review}
            name="Review"
            placeholder="Your review"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default MovieReviewForm;
