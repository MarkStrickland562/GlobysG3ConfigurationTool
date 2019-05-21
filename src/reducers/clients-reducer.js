import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  let newState;
  const {
    id,
    cat_acct_search_type,
    client_ad_nme,
    default_currency_id,
    default_currency_use_symbol,
    default_email_address,
    default_language_id,
    encrypt_key,
    external_id,
    login,
    max_pwd_days,
    min_pwd_days,
    nme,
    password,
    preproc_min,
    public_encryption_key,
    public_encryption_type,
    pwd_history_count,
    sso_redirect_flg,
    sso_redirect_querystring_flg,
    timezone,
    user_acct_flg,
    validation_question_1,
    validation_question_2,
    validation_question_3,
    validation_question_4,
    validation_question_5
  } = action;

  switch (action.type) {
  case c.ADD_CLIENT: {
    newState = Object.assign({}, state, {
      [id]: {
        cat_acct_search_type: cat_acct_search_type,
        client_ad_nme: client_ad_nme,
        default_currency_id: default_currency_id,
        default_currency_use_symbol: default_currency_use_symbol,
        default_email_address: default_email_address,
        default_language_id: default_language_id,
        encrypt_key: encrypt_key,
        external_id: external_id,
        login: login,
        max_pwd_days: max_pwd_days,
        min_pwd_days: min_pwd_days,
        nme: nme,
        password: password,
        preproc_min: preproc_min,
        public_encryption_key: public_encryption_key,
        public_encryption_type: public_encryption_type,
        pwd_history_count: pwd_history_count,
        sso_redirect_flg: sso_redirect_flg,
        sso_redirect_querystring_flg: sso_redirect_querystring_flg,
        timezone: timezone,
        user_acct_flg: user_acct_flg,
        validation_question_1: validation_question_1,
        validation_question_2: validation_question_2,
        validation_question_3: validation_question_3,
        validation_question_4: validation_question_4,
        validation_question_5: validation_question_5
      }
    });
    return newState;
  }
  case c.EDIT_CLIENT: {
    const newClient = Object.assign(
      {},
      state[id],
      { cat_acct_search_type },
      { client_ad_nme },
      { default_currency_id },
      { default_currency_use_symbol },
      { default_email_address },
      { default_language_id },
      { encrypt_key },
      { external_id },
      { login },
      { max_pwd_days },
      { min_pwd_days },
      { nme },
      { password },
      { preproc_min },
      { public_encryption_key },
      { public_encryption_type },
      { pwd_history_count },
      { sso_redirect_flg },
      { sso_redirect_querystring_flg },
      { timezone },
      { user_acct_flg },
      { validation_question_1 },
      { validation_question_2 },
      { validation_question_3 },
      { validation_question_4 },
      { validation_question_5 }
    );
    newState = Object.assign({}, state, {
      [id]: newClient
    });
    return newState;
  }
  case c.DELETE_CLIENT: {
    newState = Object.assign({}, state);
    delete newState[action.client.id];
    return newState;
  }
  case c.RECEIVE_CLIENT: {
    newState = Object.assign({}, state);
    newState[action.client.id] = action.client;
    return newState;
  }
  case c.RECEIVE_DELETED_CLIENT: {
    newState = Object.assign({}, state);
    delete newState[action.clientId];
    return newState;
  }
  default: {
    return state;
  }
  }
};
