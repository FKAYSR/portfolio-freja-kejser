import { Link } from "react-router";
import NameTitle from "./NameTitle";

export default function Navbar({isHomePage, scrolled}) {
  const navbarState = isHomePage && !scrolled ? "navbar-hero" : "navbar-solid";

  return (
    <nav className={`navbar ${navbarState}`}>
      <div className="navbar-div">
        <h1>
          <Link to="/" className="navbar-logo" aria-label="Go to home screen">
            <NameTitle variant="navbar" />
          </Link>
        </h1>

        <ul className="navbar-links">
          <li>
            <Link to="/#projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About me</Link>
          </li>
          <li>
            <Link to="/#toolkit">Toolkit</Link>
          </li>
          <li>
            <Link to="/#exploring">Exploring</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
