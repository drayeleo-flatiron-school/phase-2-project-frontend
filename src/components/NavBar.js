import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <nav>
        <h1>
          <div className="NavBar">
            <button>
              <Link to="/">Cinephile</Link>
            </button>
            <button>
              <Link className="button" to="/reviews">
                Movie Reviews
              </Link>
            </button>
            <button>
              <Link className="button" to="/wow">
                OWFP
              </Link>
            </button>
          </div>
        </h1>
      </nav>
    </header>
  );
}

export default NavBar;
