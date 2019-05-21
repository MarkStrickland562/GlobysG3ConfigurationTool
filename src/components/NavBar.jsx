import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <style jsx>
        {`
          .navtab {
            display: inline-block;
            padding: 5px;
            margin-left: 5px;
            width: 15%;
            background-color: steelblue;
            border-radius: 5px;
          }
          .navtab p {
            font-size: 18px;
            font-family: sans-serif;
            color: white;
            padding: 2px 2px 2px 2px;
          }
          .navtab p:hover {
            color: rgb(216, 216, 216);
            text-decoration: none;
            padding-bottom: 2px;
            cursor: pointer;
          }            
      `}
      </style>
      <div>
        <Link to="/clients">
          <div className="navtab">
            <p>Client Settings</p>
          </div>
        </Link>
        <Link to="/products">
          <div className="navtab">
            <p>Products</p>
          </div>
        </Link>
        <Link to="/groups">
          <div className="navtab">
            <p>Groups</p>
          </div>
        </Link>
        <Link to="/configurepermissions">
          <div className="navtab">
            <p>Permissions</p>
          </div>
        </Link>
        <Link to="/configurecustomvalues">
          <div className="navtab">
            <p>Customizations</p>
          </div>
        </Link>
        <Link to="/">
          <div className="navtab">
            <p>Home</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
