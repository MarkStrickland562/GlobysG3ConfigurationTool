import React from "react";
import NavBar from "./NavBar";
import PropTypes from "prop-types";
import CustomValue from "./CustomValue";
import { connect } from "react-redux";

function ConfigureCustomValues(props) {
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
        <h1 className="pageTitle">CUSTOMIZATIONS</h1>
        <div className="pageText">
          <table>
            <tr>
              <th style={{ width: 66 }}>Custom Value ID</th>
              <th style={{ width: 66 }}>Custom Type ID</th>
              <th style={{ width: 184 }}>Custom Type Name</th>
              <th style={{ width: 190 }}>Description</th>
              <th style={{ width: 300 }}>Character Value</th>
              <th style={{ width: 60 }}>Numeric Value</th>
              <th style={{ width: 66 }}>Default Flag</th>
            </tr>
          </table>
          <table>
            {Object.keys(props.customValues).map(function(customValueId) {
              var customValue = props.customValues[customValueId];
              var customType = props.customTypes[customValue.custom_type_id];
              return (
                <div key={customValueId}>
                  <div>
                    <CustomValue
                      customValueId={customValueId}
                      custom_type_id={customValue.custom_type_id}
                      custom_type_name={customType.custom_type_name}
                      description={customValue.description}
                      char_value={customValue.char_value}
                      num_value={customValue.num_value}
                      default_value={customValue.default_value}
                      key={customValueId}
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

ConfigureCustomValues.propTypes = {
  customValues: PropTypes.object,
  customTypes: PropTypes.object,
  clientCustomValues: PropTypes.object,
  productCustomValues: PropTypes.object,
  groupCustomValues: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect()(ConfigureCustomValues);
