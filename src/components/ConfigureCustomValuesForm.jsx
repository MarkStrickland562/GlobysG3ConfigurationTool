import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CustomValue from './CustomValue';
import { connect } from 'react-redux';

function ConfigureCustomValues(props) {
  function handleSavingSelectedCustomValue(customValueId) {
    const { dispatch } = props;
    const action = {
      type: 'SELECT_CUSTOM_VALUE',
      customValueId: customValueId
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
        <h1 className="pageTitle">CUSTOMIZATIONS</h1>
        <div className="pageText">
          {Object.keys(props.customValues).map(function(customValueId) {
            var customValue = props.customValues[customValueId];
            var customType = props.customTypes[customValue.custom_type_id];
            return (
              <div key={customValueId}>
                <div>
                  <CustomValue
                    char_value={customValue.char_value}
                    custom_type_id={customValue.custom_type_id}
                    default_value={customValue.default_value}
                    description={customValue.description}
                    num_value={customValue.num_value}
                    custom_type_name={customType.custom_type_name}
                    key={customValueId}
                  />
                </div>
                <div>
                  <button
                    onClick={() => {
                      handleSavingSelectedCustomValue(customValueId);
                    }}
                    type='button'
                    className='button-main'
                  >
                    <Link className='link' to='/editcustomValue'>
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

ConfigureCustomValues.propTypes = {
  customValues: PropTypes.object,
  customTypes: PropTypes.object,
  clientCustomValues: PropTypes.object,
  productCustomValues: PropTypes.object,
  groupCustomValues: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect()(ConfigureCustomValues);
