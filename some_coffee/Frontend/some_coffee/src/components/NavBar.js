import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <br />
      <br />
      <div className="topnav">
        <li>
          <Link className="active" to="/">
            Home
          </Link>
          <Link to="/SignIn">Sign in</Link>
          <Link to="/SignUp">Sign up</Link>
          <Link to="/About">About</Link>
        </li>
      </div>
    </div>
  );
}

export default NavBar;
