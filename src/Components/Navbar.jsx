import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
              <div className="container">
                <NavLink className="navbar-brand" to="#">
                 <span > DT Network :-)</span>
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mx-3 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link " to="/about">
                        Info
                      </NavLink>
                    </li>
 <li className="nav-item">
                      <NavLink className="nav-link " to="/govpolicy">
                        Gov. Policy
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">
                        Contact
                      </NavLink>
                    </li>

                  </ul>
                </div>
              </div>
            </nav>
      
    </>
  );
}

export default Navbar