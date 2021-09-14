import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-inner">
          <div className="container">
            <a
              className="btn btn-navbar"
              data-toggle="collapse"
              data-target=".nav-collapse"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </a>
            <a className="brand" href="#">
              Job Site(Monster)
            </a>
            {/* Job
Recruiters
Companies
Tools
Services
More
Login
For Employees */}
            <div className="nav-collapse">
              <ul className="nav">
                <li className="active">
                  <a href="#">Jobs</a>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Recruiters <b className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Action</a>
                    </li>
                    <li>
                      <a href="#">Another action</a>
                    </li>
                    <li>
                      <a href="#">Something else here</a>
                    </li>
                    <li className="divider" />
                    <li className="nav-header">Nav header</li>
                    <li>
                      <a href="#">Separated link</a>
                    </li>
                    <li>
                      <a href="#">One more separated link</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Companies <b className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Action</a>
                    </li>
                    <li>
                      <a href="#">Another action</a>
                    </li>
                    <li>
                      <a href="#">Something else here</a>
                    </li>
                    <li className="divider" />
                    <li className="nav-header">Nav header</li>
                    <li>
                      <a href="#">Separated link</a>
                    </li>
                    <li>
                      <a href="#">One more separated link</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="nav pull-right">
                <li className="divider-vertical" />
                <li className="nav-header">
                  <Link to="./login">Login</Link>
                </li>
                <li className="nav-header">
                  <Link to="./register">Register</Link>
                </li>
                <li className="nav-header">
                  <Link to="./login">For Employer</Link>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Tools <b className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Action</a>
                    </li>
                    <li>
                      <a href="#">Another action</a>
                    </li>
                    <li>
                      <a href="#">Something else here</a>
                    </li>
                    <li className="divider" />
                    <li>
                      <a href="#">Separated link</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
