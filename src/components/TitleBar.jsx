import React from 'react';

function TitleBar() {
  return (
    <div>
      <style jsx>
        {`
          .titlebar {
            margin-left: 2%;
            margin-right: 1%;
            background-color: steelblue;
            border-radius: 5px;
          }
          .titlebar p {
            color: white;
            font-size: 48px;
            font-family: sans-serif;
            text-shadow: 1px 1px 2px darkblue;
          } 
      `}
      </style>
      <div className="titlebar">
        <br></br>
        <p>Globys G3 Configuration Tool</p>
        <br></br>
      </div>
    </div>
  );
}

export default TitleBar;
