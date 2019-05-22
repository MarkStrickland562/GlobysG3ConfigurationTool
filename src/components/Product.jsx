import React from 'react';
import PropTypes from 'prop-types';

function Product(props){
  return (
    <p>Client ID: {props.client_id}<br></br>
       Display Help Text: {props.display_help_text }<br></br>
       Display Name: {props.display_name}<br></br>
       Display Order: {props.display_order}<br></br>
       PIV Flag: {props.piv_flg}<br></br>
       Product Code: {props.product_code}<br></br>
       Product Name: {props.product_name}
    </p>   
  );
}

Product.propTypes = {
  client_id: PropTypes.string.isRequired,
  display_help_text: PropTypes.string.isRequired,
  display_name: PropTypes.string.isRequired,
  display_order: PropTypes.string.isRequired,
  piv_flg: PropTypes.string.isRequired,
  product_code: PropTypes.string.isRequired,
  product_name: PropTypes.string.isRequired
};

export default Product;
