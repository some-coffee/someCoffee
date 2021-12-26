import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div>
        <br />
        <img src="Images/instagram-icon.png" id="instagram" />
      </div>
      <br />
      <br />
      <div className="topnav">
        <li>
          <Link className="active" to="/">
            Home
          </Link>
          <Link to="/SignIn">Sign in</Link>
          <Link to="/SignUp">Sign up</Link>
          <Link to="/Menu">Menu</Link>
          <Link to="/Product">Products</Link>
          <Link to="/About">About</Link>
        </li>
      </div>
    </div>
  );
}

export default NavBar;
