import "../App.css";

function App() {
  return (
    <div className="App">
      <div>NavBar</div>
      <div>
        {" "}
        Home
        <div>New Releases</div>
        <div>
          Search by Title
          <select>Choose Genre</select>
        </div>
      </div>
      <form>Form (on separate page)</form>
    </div>
  );
}

export default App;

/* 
***Component Hierarchy***

App
  NavBar
  Home
    NewReleases
    Search
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
