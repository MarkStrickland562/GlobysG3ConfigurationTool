import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <style jsx>
        {`
         #content {
              width: 100%;
          }
        }
      `}
      </style>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/clients">
                  Client Settings<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/groups">
                  Groups
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/permissions">
                  Permissions
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/customizations">
                  Customizations
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link disabled" href="#">
                  Reports
                </Link>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
