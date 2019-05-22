import React from 'react';
import PropTypes from 'prop-types';

function Product(props){
  return (
    <div>
      <style jsx>{`
        td {
          width: 180px;
          border: 2px solid steelblue;
          font-size: 14px;
        }
      `}
      </style>
      <div>
        <tr>
          <td style={{width: 80}}>{props.client_id}</td>
          <td style={{width: 241}}>{props.group_name}</td>
          <td style={{width: 82}}>{props.group_priority}</td>
          <td style={{width: 122}}>{props.viewable_flg}</td>
        </tr>
      </div>
    </div>
  );
}

Product.propTypes = {
  client_id: PropTypes.string.isRequired,
  group_name: PropTypes.string.isRequired,
  group_priority: PropTypes.string.isRequired,
  viewable_flg: PropTypes.string.isRequired
};

export default Product;
