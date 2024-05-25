import React from "react";
// import propTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="/">
                {props.more}
              </a>
              <a className="nav-link" href="/">
                Pricing
              </a>
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
