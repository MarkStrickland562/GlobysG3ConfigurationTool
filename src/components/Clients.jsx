import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Client from './Client';
import { connect } from 'react-redux';

function Clients(props) {
  function handleSavingSelectedClient(clientId) {
    const { dispatch } = props;
    const action = {
      type: 'SELECT_CLIENT',
      clientId: clientId
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
        <h1 className="pageTitle">CLIENTS</h1>
        <div className="pageText">
          <button type='button' className='button-main'>
            <Link className='link' to='/addclient'>
              ADD CLIENT
            </Link>
          </button>
          <button type='button' className='button-main'>
            <Link className='link' to='/searchclients'>
              SEARCH CLIENTS
            </Link>
          </button>
          <br></br>
          <br></br>
        </div>
        <div className="pageText">
          {Object.keys(props.clients).map(function(clientId) {
            var client = props.clients[clientId];
            return (
              <div key={clientId}>
                <div>
                  <Client
                    cat_acct_search_type={client.cat_acct_search_type}
                    client_ad_nme={client.client_ad_nme}
                    default_currency_id={client.default_currency_id}
                    default_currency_use_symbol={client.default_email_address}
                    default_email_address={client.default_email_address}
                    default_language_id={client.default_language_id}
                    encrypt_key={client.encrypt_key}
                    external_id={client.external_id}
                    login={client.login}
                    max_pwd_days={client.max_pwd_days}
                    min_pwd_days={client.min_pwd_days}
                    nme={client.nme}
                    password={client.password}
                    preproc_min={client.preproc_min}
                    public_encryption_key={client.public_encryption_key}
                    public_encryption_type={client.public_encryption_type}
                    pwd_history_count={client.pwd_history_count}
                    sso_redirect_flg={client.sso_redirect_flg}
                    sso_redirect_querystring_flg={client.sso_redirect_querystring_flg}
                    timezone={client.timezone}
                    user_acct_flg={client.user_acct_flg}
                    validation_question_1={client.validation_question_1}
                    validation_question_2={client.validation_question_2}
                    validation_question_3={client.validation_question_3}
                    validation_question_4={client.validation_question_4}
                    validation_question_5={client.validation_question_5}
                    clientId={client.clientId}
                    key={clientId}
                  />
                </div>
                <div>
                  <button
                    onClick={() => {
                      handleSavingSelectedClient(clientId);
                    }}
                    type='button'
                    className='button-main'
                  >
                    <Link className='link' to='/deleteclient'>
                      DELETE
                    </Link>
                  </button>
                  <button
                    onClick={() => {
                      handleSavingSelectedClient(clientId);
                    }}
                    type='button'
                    className='button-main'
                  >
                    <Link className='link' to='/editclient'>
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

Clients.propTypes = {
  clients: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect()(Clients);
