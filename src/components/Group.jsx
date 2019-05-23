import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Group(props) {
  function handleSavingSelectedGroup(groupId) {
    const { dispatch } = props;
    const action = {
      type: 'SELECT_GROUP',
      groupId: groupId
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
          <td style={{ width: 80 }}>{props.client_id}</td>
          <td style={{ width: 241 }}>{props.group_name}</td>
          <td style={{ width: 82 }}>{props.group_priority}</td>
          <td style={{ width: 122 }}>{props.viewable_flg}</td>
          <td style={{ border: '0px' }}>
            <button
              onClick={() => {
                handleSavingSelectedGroup(props.groupId);
              }}
              type="button"
              className="button-main"
            >
              <Link className="link" to="/deletegroup">
                DELETE
              </Link>
            </button>
            <button
              onClick={() => {
                handleSavingSelectedGroup(props.groupId);
              }}
              type="button"
              className="button-main"
            >
              <Link className="link" to="/editgroup">
                UPDATE
              </Link>
            </button>
          </td>
        </tr>
      </div>
    </div>
  );
}

Group.propTypes = {
  client_id: PropTypes.string.isRequired,
  group_name: PropTypes.string.isRequired,
  group_priority: PropTypes.string.isRequired,
  viewable_flg: PropTypes.string.isRequired,
  groupId: PropTypes.string.isRequired,
  dispatch: PropTypes.func
};

export default connect()(Group);
