import React from 'react';
import NavBar from './NavBar';

function Products() {
  return (
    <div>
      <style jsx>{`
          .pageTitle {
            font-size: 30px;
            margin-top: 5%;
            text-align: center;
            font-family: sans-serif;
            font-size: 36px;
            color: steelblue;
            font-weight: bold;
            text-shadow: 1px 1px 2px darkblue;
          }

          .pageText {
            width: 90%;
            font-style: italic;
            font-size: 14px;
            font-family: sans-serif;
            padding-left: 5%;
            padding-right: 5%;
            color: steelblue;
            fontweight: bold;
          }
      `}
      </style>
      <div>
        <NavBar />
       <h1 className="pageTitle">Under Construction</h1>
      </div>
    </div>
  );
}

export default Products;
