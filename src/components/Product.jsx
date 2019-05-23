import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Product(props) {
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
      <style jsx>
        {`
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

          td {
            width: 180px;
            border: 2px solid steelblue;
            font-size: 12px;
          }
        `}
      </style>
      <div>
        <tr>
          <td style={{ width: 82 }}>{props.client_id}</td>
          <td style={{ width: 264 }}>{props.display_help_text}</td>
          <td style={{ width: 182 }}>{props.display_name}</td>
          <td style={{ width: 122 }}>{props.display_order}</td>
          <td style={{ width: 82 }}>{props.piv_flg}</td>
          <td style={{ width: 122 }}>{props.product_code}</td>
          <td style={{ width: 160 }}>{props.product_name}</td>
          <td style={{ border: '0px' }}>
            <button
              onClick={() => {
                handleSavingSelectedProduct(props.productId);
              }}
              type="button"
              className="button-main"
            >
              <Link className="link" to="/deleteproduct">
                DELETE
              </Link>
            </button>
            <button
              onClick={() => {
                handleSavingSelectedProduct(props.productId);
              }}
              type="button"
              className="button-main"
            >
              <Link className="link" to="/editproduct">
                UPDATE
              </Link>
            </button>
          </td>
        </tr>
      </div>
    </div>
  );
}

Product.propTypes = {
  client_id: PropTypes.string.isRequired,
  display_help_text: PropTypes.string.isRequired,
  display_name: PropTypes.string.isRequired,
  display_order: PropTypes.string.isRequired,
  piv_flg: PropTypes.string.isRequired,
  product_code: PropTypes.string.isRequired,
  product_name: PropTypes.string.isRequired,
  productId: PropTypes.string.isRequired,
  dispatch: PropTypes.func
};

export default connect()(Product);
