import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

function NavBar() {
  return (
    <header className="site-header">
      <nav className="nav">
        <Button variant="outlined" size="large">
          <NavLink exact to="/">
            Cinephile
          </NavLink>
        </Button>
        <div className="NavBar">
          <Button variant="outlined" size="large">
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
