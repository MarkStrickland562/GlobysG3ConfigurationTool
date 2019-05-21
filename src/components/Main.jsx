import React from 'react';
import NavBar from './NavBar';
import TitleBar from './TitleBar';
import ConfigImg from '../assets/images/GlobysProductConfiguration.jpg';

function Main() {
  return (
    <div>
      <style jsx>{`
          .container {
            text-align: center;
            margin: 2% 2% 2% 2%;
          }
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
            font-weight: bold;
            text-align: left;
          }

        .image {
          margin-left: auto;
          margin-right: auto;
          padding-left: 5%;
          padding-right: 5%;
          text-align: center;
          height: 90%;
          width: 90%;
        }
      `}
      </style>
      <div className="container">
        <TitleBar />
        <br></br>
        <NavBar />
        <h1 className="pageTitle">The Universe of Globys G3 Configuration</h1>
        <p className="pageText">The Globys G3 product is highly-configurable which also makes it very complex.
           The below diagram displays all of the configuration areas in the product.
           This project is a prototype for a future fully-functioning configuration tool and 
           it addresses configuration of Clients, Products, Groups, Permissions and Customizations.</p>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div><img className="image" src={ConfigImg}></img>
      </div>
    </div>
  );
}

export default Main;
