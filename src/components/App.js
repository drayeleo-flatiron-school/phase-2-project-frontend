import "../App.css"; //do we want to keep template css file or delete and start from scratch?
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import MovieReviews from "./MovieReviews.js";
import OwenWilsonFanPage from "./OwenWilsonFanPage.js";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  // console.log("app rendering");
  const [movies, setMovies] = useState([]);

  const url = "http://localhost:3000/movies";

  useEffect(() => {
    console.log("useEffect here");
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // console.log("Movies in app.js: ", movies);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage movies={movies} />
        </Route>
        <Route path="/reviews">
          <MovieReviews />
        </Route>
        <Route path="/wow">
          <OwenWilsonFanPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

/* 
***Component Hierarchy***

App
  NavBar
  HomePage
    SearchBar  
    NewReleases
  MovieReviews (add form to add your own reviews)
  OwenWilsonFanPage

*/
