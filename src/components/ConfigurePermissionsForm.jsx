import React from 'react';
import NavBar from './NavBar';
import PropTypes from 'prop-types';
import Permission from './Permission';
import { connect } from 'react-redux';

function ConfigurePermissions(props) {
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
        <h1 className="pageTitle">PERMISSIONS</h1>
        <div className="pageText">
          <table>
            <tr>
              <th style={{ width: 66 }}>Permission ID</th>
              <th style={{ width: 160 }}>Permission Name</th>
              <th style={{ width: 360 }}>Description</th>
              <th style={{ width: 100 }}>Permission Type</th>
              <th style={{ width: 60 }}>User Flag</th>
              <th style={{ width: 120 }}>Category</th>
            </tr>
          </table>
          <table>
            {Object.keys(props.permissions).map(function(permissionId) {
              var permission = props.permissions[permissionId];
              var permissionCategory =
                props.permissionCategories[permission.permission_category_id];
              return (
                <div key={permissionId}>
                  <div>
                    <Permission
                      permissionId={permissionId}
                      nme={permission.nme}
                      permission_description={permission.permission_description}
                      type={permission.type}
                      user_flg={permission.user_flg}
                      permission_category_name={
                        permissionCategory.permission_category_name
                      }
                      key={permissionId}
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
