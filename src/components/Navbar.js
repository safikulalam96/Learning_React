import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                {props.more}
              </Link>
            </div>
          </div>
          <div
            className={`form-check form-switch mx-5 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.togglemode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable dark mode
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}

// //Type of props
// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     more: PropTypes.string.isRequired
// };

//declaring props in the same file
// Navbar.defaultProps={
//     title:'Allu arjun',
//     more:"Info"
// }
