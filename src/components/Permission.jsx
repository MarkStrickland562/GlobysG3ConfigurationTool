import React from 'react';
import PropTypes from 'prop-types';

function Permission(props){
  return (
    <p>Permission Name: {props.nme}<br></br>
       Permission Description: {props.permission_description}<br></br>
       Permission Type: {props.type}<br></br>
       User Flag: {props.user_flg}<br></br>
       Category: {props.permission_category_name}
    </p>   
  );
}

Permission.propTypes = {
  nme: PropTypes.string.isRequired,
  permission_description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  user_flg: PropTypes.string.isRequired,
  permission_category_name: PropTypes.string.isRequired
};

export default Permission;
