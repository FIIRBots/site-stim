import { Link } from 'react-router-dom';
import logo from '../assets/img/LOGO.SVG'; // adaugă logo-ul în assets/img

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg "style={{ background: "linear-gradient(82deg, #15253e, #15253e)" }}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" height="70" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <Link className="nav-link text-Alb" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-Alb" to="/projects">Projects</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link text-Alb" to="/vision">Vision</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link text-Alb" to="/partners">Partners</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-Alb" to="/contact">Contact</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link text-Alb" to="/get-involved">Get Involved</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
    );
}
