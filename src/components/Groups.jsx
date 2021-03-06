import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Group from './Group';
import { connect } from 'react-redux';

function Groups(props) {
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
            width: 90%;
            margin-left: 10%;
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
        <h1 className="pageTitle">GROUPS</h1>
        <div className="pageText">
          <button type="button" className="button-main">
            <Link className="link" to="/addgroup">
              ADD GROUP
            </Link>
          </button>
          <button type="button" className="button-main">
            <Link className="link" to="/searchgroups">
              SEARCH GROUPS
            </Link>
          </button>
          <br />
          <br />
        </div>
        <div className="pageText">
          <table>
            <tr>
              <th style={{ width: 80 }}>Client ID</th>
              <th style={{ width: 240 }}>Group Name</th>
              <th style={{ width: 80 }}>Group Priority</th>
              <th style={{ width: 120 }}>Viewable Flag</th>
            </tr>
          </table>
          <table>
            {Object.keys(props.groups).map(function(groupId) {
              var group = props.groups[groupId];
              return (
                <div key={groupId}>
                  <div>
                    <Group
                      client_id={group.client_id}
                      group_name={group.group_name}
                      group_priority={group.group_priority}
                      viewable_flg={group.viewable_flg}
                      groupId={group.groupId}
                      key={groupId}
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

Groups.propTypes = {
  groups: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect()(Groups);
