import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Product from './Product';
import { connect } from 'react-redux';

function Products(props) {
  function handleSavingSelectedProduct(productId) {
    const { dispatch } = props;
    const action = {
      type: 'SELECT_PRODUCT',
      productId: productId
    };
    dispatch(action);
  }
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
          text-align: left;
          width: 90%;
          font-size: 14px;
          font-family: sans-serif;
          padding-left: 5%;
          padding-right: 5%;
        }

        .button-main {
          background-color: steelblue;
          border-radius: 5px;
        }

        .link {
          color: white;
          text-decoration: none;
        }
      `}
      </style>
      <div className="container">
        <NavBar />
        <h1 className="pageTitle">PRODUCTS</h1>
        <div className="pageText">
          <button type='button' className='button-main'>
            <Link className='link' to='/addproduct'>
              ADD PRODUCT
            </Link>
          </button>
          <button type='button' className='button-main'>
            <Link className='link' to='/searchproducts'>
              SEARCH PRODUCTS
            </Link>
          </button>
          <br></br>
          <br></br>
        </div>
        <div className="pageText">
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
                    productId={product.productId}
                    key={productId}
                  />
                </div>
                <div>
                  <button
                    onClick={() => {
                      handleSavingSelectedProduct(productId);
                    }}
                    type='button'
                    className='button-main'
                  >
                    <Link className='link' to='/deleteproduct'>
                      DELETE
                    </Link>
                  </button>
                  <button
                    onClick={() => {
                      handleSavingSelectedProduct(productId);
                    }}
                    type='button'
                    className='button-main'
                  >
                    <Link className='link' to='/editproduct'>
                      UPDATE
                    </Link>
                  </button>
                </div>
              </div>
            );
          
          })}
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
