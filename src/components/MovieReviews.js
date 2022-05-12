function MovieReviews() {
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movieReviews')
      .then((response) => response.json())
      .then((movieReviews) => setMovieReviews(movieReviews));
  }, []);

  console.log(movieReviews);

  function addMovieReview(newMovie) {
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
