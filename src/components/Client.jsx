import React from 'react';
import PropTypes from 'prop-types';

function Client(props){
  return (
    <p>CAT Account Search Type: {props.cat_acct_search_type}<br></br>
       Client Ad Name: {props.client_ad_nme}<br></br>
       Default Currency ID: {props.default_currency_id}<br></br>
       Default Currency Use Symbol: {props.default_currency_use_symbol}<br></br>
       Default Email Address: {props.default_email_address}<br></br>
       Default Language ID: {props.default_language_id}<br></br>
       Encrypt Key: {props.encrypt_key}<br></br>
       External ID:  {props.external_id}<br></br>
       Login: {props.login}<br></br>
       Max Password Days: {props.max_pwd_days}<br></br>
       Min Password Days: {props.min_pwd_days}<br></br>
       Client Name: {props.nme}<br></br>
       Password: {props.password}<br></br>
       Preproc Min: {props.preproc_min}<br></br>
       Public Encryption Key: {props.public_encryption_key}<br></br>
       Public Encryption Type: {props.public_encryption_type}<br></br>
       Password History Count: {props.pwd_history_count}<br></br>
       SSO Redirect Flag: {props.sso_redirect_flg}<br></br>
       SSO Redirect Querystring Flag: {props.sso_redirect_querystring_flg}<br></br>
       Timezone: {props.timezone}<br></br>
       User Account Flag: {props.user_acct_flg}<br></br>
       Validation Question #1: {props.validation_question_1}<br></br>
       Validation Question #1: {props.validation_question_2}<br></br>
       Validation Question #1: {props.validation_question_3}<br></br>
       Validation Question #1: {props.validation_question_4}<br></br>
       Validation Question #1: {props.validation_question_5 }
    </p>   
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