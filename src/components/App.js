import "../App.css"; //do we want to keep template css file or delete and start from scratch?
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import MovieReviews from "./MovieReviews.js";
import OwenWilsonFanPage from "./OwenWilsonFanPage.js";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [highlightedMovie, setHighlightedMovie] = useState({});

  const url = "http://localhost:3000/movies";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const index = Math.floor(Math.random() * data.length);
        // console.log("index: ", index);
        setHighlightedMovie(data[index]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage highlightedMovie={highlightedMovie} />
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

// template App:
//
// import logo from "./logo.svg";
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.\notifications.html
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
