import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="topnav">
      <li>
        <Link className="active" to="/">
          Home
        </Link>
        <Link to="/SignIn">Sign in</Link>
        <Link to="/SignUp">Sign up</Link>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </li>
    </div>
  );
}

export default NavBar;
