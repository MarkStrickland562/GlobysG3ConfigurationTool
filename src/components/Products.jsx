import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Product from './Product';
import { connect } from 'react-redux';

function Products(props) {
  return (
    <div>
      <style jsx>
        {`
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
            text-align: left;
            font-size: 14px;
            font-family: sans-serif;
            padding-left: 5%;
            padding-right: 5%;
          }

          .button-main {
            background-color: steelblue;
            border-radius: 5px;
            display: inline-block;
            font-size: 14px;
          }

          .link {
            color: white;
            text-decoration: none;
          }

          th {
            width: 180px;
            border: 2px solid steelblue;
            padding: 2px;
            margin: 0px 0px 0px 0px;
            background-color: steelblue;
            color: white;
            font-size: 16px;
          }
        `}
      </style>
      <div className="container">
        <NavBar />
        <h1 className="pageTitle">PRODUCTS</h1>
        <div className="pageText">
          <button type="button" className="button-main">
            <Link className="link" to="/addproduct">
              ADD PRODUCT
            </Link>
          </button>
          <button type="button" className="button-main">
            <Link className="link" to="/searchproducts">
              SEARCH PRODUCTS
            </Link>
          </button>
          <br />
          <br />
        </div>
        <div className="pageText">
          <table>
            <tr>
              <th style={{ width: 66 }}>Client ID</th>
              <th style={{ width: 200 }}>Display Help Text</th>
              <th style={{ width: 144 }}>Display Name</th>
              <th style={{ width: 93 }}>Display Order</th>
              <th style={{ width: 64 }}>PIV Flag</th>
              <th style={{ width: 96 }}>Product Code</th>
              <th style={{ width: 130 }}>Product Name</th>
            </tr>
          </table>
          <table>
            {Object.keys(props.products).map(function(productId) {
              var product = props.products[productId];
              return (
                <div key={productId}>
                  <div>
                    <Product
                      client_id={product.client_id}
                      display_help_text={product.display_help_text}
                      display_name={product.display_name}
                      display_order={product.display_order}
                      piv_flg={product.piv_flg}
                      product_code={product.product_code}
                      product_name={product.product_name}
                      productId={productId}
                      key={productId}
                    />
                  </div>
                </div>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

Products.propTypes = {
  products: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect()(Products);
