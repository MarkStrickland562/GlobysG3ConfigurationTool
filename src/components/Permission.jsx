import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Permission(props) {
  function handleSavingSelectedPermission(permissionId) {
    const { dispatch } = props;
    const action = {
      type: 'SELECT_PERMISSION',
      permissionId: permissionId
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
          <td style={{ width: 150 }}>{props.permissionId}</td>
          <td style={{ width: 240 }}>{props.nme}</td>
          <td style={{ width: 600 }}>{props.permission_description}</td>
          <td style={{ width: 100 }}>{props.type}</td>
          <td style={{ width: 100 }}>{props.user_flg}</td>
          <td style={{ width: 122 }}>{props.permission_category_name}</td>
          <td style={{ border: '0px' }}>
            <button
              onClick={() => {
                handleSavingSelectedPermission(props.permissionId);
              }}
              type="button"
              className="button-main"
            >
              <Link className="link" to="/editpermission">
                UPDATE
              </Link>
            </button>
          </td>
        </tr>
      </div>
    </div>
  );
}

Permission.propTypes = {
  nme: PropTypes.string.isRequired,
  permission_description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  user_flg: PropTypes.string.isRequired,
  permission_category_name: PropTypes.string.isRequired,
  permissionId: PropTypes.string.isRequired,
  dispatch: PropTypes.func
};

export default connect()(Permission);
