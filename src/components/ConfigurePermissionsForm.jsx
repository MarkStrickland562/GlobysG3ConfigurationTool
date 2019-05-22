import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Permission from './Permission';
import { connect } from 'react-redux';

function ConfigurePermissions(props) {
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
        <h1 className="pageTitle">PERMISSIONS</h1>
        <div className="pageText">
          {Object.keys(props.permissions).map(function(permissionId) {
            var permission = props.permissions[permissionId];
            var permissionCategory = props.permissionCategories[permission.permission_category_id];
            return (
              <div key={permissionId}>
                <div>
                  <Permission
                    nme={permission.nme}
                    permission_description={permission.permission_description}
                    type={permission.type}
                    user_flg={permission.user_flg}
                    permission_category_name={permissionCategory.permission_category_name}
                    permissionId={permission.permissionId}
                    key={permissionId}
                  />
                </div>
                <div>
                  <button
                    onClick={() => {
                      handleSavingSelectedPermission(permissionId);
                    }}
                    type='button'
                    className='button-main'
                  >
                    <Link className='link' to='/editpermission'>
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

ConfigurePermissions.propTypes = {
  permissions: PropTypes.object,
  permissionCategories: PropTypes.object,
  clientPermissions: PropTypes.object,
  productPermissions: PropTypes.object,
  groupPermissions: PropTypes.object,
  productUserTypePermissions: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect()(ConfigurePermissions);
