import React from 'react';
import PropTypes from 'prop-types';

function Product(props){
  return (
    <p>Client ID: {props.client_id}
       Group Name: {props.group_name}
       Group Priority: {props.group_priority}
       Viewable Flag: {props.viewable_flg}
    </p>   
  );
}

Product.propTypes = {
  client_id: PropTypes.string.isRequired,
  group_name: PropTypes.string.isRequired,
  group_priority: PropTypes.string.isRequired,
  viewable_flg: PropTypes.string.isRequired
};

export default Product;
