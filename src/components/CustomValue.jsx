import React from 'react';
import PropTypes from 'prop-types';

function CustomValue(props){
  return (
    <p>Custom Type: {props.custom_type_name}<br></br>
       Description: {props.description}<br></br>
       Character Value: {props.char_value}<br></br>
       Numeric Value: {props.num_value}<br></br>
       Default Value: {props.default_value} 
    </p>   
  );
}

CustomValue.propTypes = {
  char_value: PropTypes.string.isRequired,
  custom_type_name: PropTypes.string.isRequired,
  default_value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  num_value: PropTypes.string.isRequired
};

export default CustomValue;
