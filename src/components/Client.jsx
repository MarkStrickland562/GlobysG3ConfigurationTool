import React from 'react';
import PropTypes from 'prop-types';

function Client(props){
  return (
    <div>
      <style jsx>{`
        .label {
          display: inline-block;
          width: 20%;
          text-align: right;
          padding-right: 5px;
          margin-bottom: 2px;
        }
        .val {
          display: inline-block;
          width: 70%;
          border: 2px solid steelblue;
          border-radius: 2px;
          padding: 5px;
          margin-bottom: 2px;
        }
      `}
      </style>
      <div>
        <p><span className="label">CAT Account Search Type:</span><span className="val">{props.cat_acct_search_type}</span><br></br>
          <span className="label">Client Ad Name:</span><span className="val">{props.client_ad_nme}</span><br></br>
          <span className="label">Default Currency ID:</span><span className="val">{props.default_currency_id}</span><br></br>
          <span className="label">Default Currency Use Symbol:</span><span className="val">{props.default_currency_use_symbol}</span><br></br>
          <span className="label">Default Email Address:</span><span className="val">{props.default_email_address}</span><br></br>
          <span className="label">Default Language ID:</span><span className="val">{props.default_language_id}</span><br></br>
          <span className="label">Encrypt Key:</span><span className="val">{props.encrypt_key}</span><br></br>
          <span className="label">External ID:</span><span className="val">{props.external_id}</span><br></br>
          <span className="label">Login:</span><span className="val">{props.login}</span><br></br>
          <span className="label">Max Password Days:</span><span className="val">{props.max_pwd_days}</span><br></br>
          <span className="label">Min Password Days:</span><span className="val">{props.min_pwd_days}</span><br></br>
          <span className="label">Client Name:</span><span className="val">{props.nme}</span><br></br>
          <span className="label">Password:</span><span className="val">{props.password}</span><br></br>
          <span className="label">Preproc Min:</span><span className="val">{props.preproc_min}</span><br></br>
          <span className="label">Public Encryption Key:</span><span className="val">{props.public_encryption_key}</span><br></br>
          <span className="label">Public Encryption Type:</span><span className="val">{props.public_encryption_type}</span><br></br>
          <span className="label">Password History Count:</span><span className="val">{props.pwd_history_count}</span><br></br>
          <span className="label">SSO Redirect Flag:</span><span className="val">{props.sso_redirect_flg}</span><br></br>
          <span className="label">SSO Redirect Querystring Flag:</span><span className="val">{props.sso_redirect_querystring_flg}</span><br></br>
          <span className="label">Timezone:</span><span className="val">{props.timezone}</span><br></br>
          <span className="label">User Account Flag:</span><span className="val">{props.user_acct_flg}</span><br></br>
          <span className="label">Validation Question #1:</span><span className="val">{props.validation_question_1}</span><br></br>
          <span className="label">Validation Question #1:</span><span className="val">{props.validation_question_2}</span><br></br>
          <span className="label">Validation Question #1:</span><span className="val">{props.validation_question_3}</span><br></br>
          <span className="label">alidation Question #1:</span><span className="val">{props.validation_question_4}</span><br></br>
          <span className="label">Validation Question #1:</span><span className="val">{props.validation_question_5 }</span>
        </p>
      </div>
    </div>
  );
}

Client.propTypes = {
  cat_acct_search_type: PropTypes.string.isRequired,
  client_ad_nme: PropTypes.string.isRequired,
  default_currency_id: PropTypes.string.isRequired,
  default_currency_use_symbol: PropTypes.string.isRequired,
  default_email_address: PropTypes.string.isRequired,
  default_language_id: PropTypes.string.isRequired,
  encrypt_key: PropTypes.string.isRequired,
  external_id: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  max_pwd_days: PropTypes.string.isRequired,
  min_pwd_days: PropTypes.string.isRequired,
  nme: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  preproc_min: PropTypes.string.isRequired,
  public_encryption_key: PropTypes.string.isRequired,
  public_encryption_type: PropTypes.string.isRequired,
  pwd_history_count: PropTypes.string.isRequired,
  sso_redirect_flg: PropTypes.string.isRequired,
  sso_redirect_querystring_flg: PropTypes.string.isRequired,
  timezone: PropTypes.string.isRequired,
  user_acct_flg: PropTypes.string.isRequired,
  validation_question_1: PropTypes.string.isRequired,
  validation_question_2: PropTypes.string.isRequired,
  validation_question_3: PropTypes.string.isRequired,
  validation_question_4: PropTypes.string.isRequired,
  validation_question_5 : PropTypes.string.isRequired
};

export default Client;