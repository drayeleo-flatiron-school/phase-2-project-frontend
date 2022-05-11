import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

function NavBar() {
  return (
    <header className="site-header">
      <nav className="nav">
        <h1>
          <NavLink exact to="/">
            CINEPHILE
          </NavLink>
        </h1>
        <div className="NavBar">
          <Button variant="outlined" size="medium">
            <NavLink className="button" exact to="/">
              Home
            </NavLink>
          </Button>
          <Button variant="outlined" size="medium">
            <NavLink className="button" exact to="/reviews">
              Movie Reviews
            </NavLink>
          </Button>
          <Button>
            <NavLink className="owen button" exact to="/wow">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_iIxH2D5ErKYgOeGPH02cjvzunIRHyFs6Q&usqp=CAU" />
            </NavLink>
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
