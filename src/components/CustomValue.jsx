import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function CustomValue(props) {
  function handleSavingSelectedCustomValue(customValueId) {
    const { dispatch } = props;
    const action = {
      type: "SELECT_CUSTOM_VALUE",
      customValueId: customValueId
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
          <td style={{ width: 68 }}>{props.customValueId}</td>
          <td style={{ width: 70 }}>{props.custom_type_id}</td>
          <td style={{ width: 180 }}>{props.custom_type_name}</td>
          <td style={{ width: 200 }}>{props.description}</td>
          <td style={{ width: 300 }}>{props.char_value}</td>
          <td style={{ width: 82 }}>{props.num_value}</td>
          <td style={{ width: 82 }}>{props.default_value}</td>
          <td style={{ border: "0px" }}>
            <button
              onClick={() => {
                handleSavingSelectedCustomValue(props.customValueId);
              }}
              type="button"
              className="button-main"
            >
              <Link className="link" to="/editcustomvalue">
                UPDATE
              </Link>
            </button>
          </td>
        </tr>
      </div>
    </div>
  );
}

CustomValue.propTypes = {
  char_value: PropTypes.string.isRequired,
  custom_type_id: PropTypes.string.isRequired,
  custom_type_name: PropTypes.string.isRequired,
  default_value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  num_value: PropTypes.string.isRequired,
  customValueId: PropTypes.string.isRequired,
  dispatch: PropTypes.func
};

export default connect()(CustomValue);
