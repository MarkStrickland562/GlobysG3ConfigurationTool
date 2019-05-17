declare @json varchar(max) = '{'
select @json = @json +  char(10) + char(9) + '"clients": ' + '{' + char(10) +
       char(9) + char(9) + '"1": ' + '{' +  + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"nme": ' + '"' + nme + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"encrypt_key": ' + '"' + encrypt_key + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"external_id": ' + '"'  + '000000000' + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"client_ad_nme": ' + '"'  + client_ad_nme + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"login": ' + '"' + login + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"password": ' + '"' + 'XXXXXXXXXX' + password + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"validation_question_1": ' + '"' + isnull(validation_question_1,'') + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"validation_question_2": ' + '"' + isnull(validation_question_2, '') + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"validation_question_3": ' + '"' + isnull(validation_question_3, '') + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"validation_question_4": ' + '"' + isnull(validation_question_4, '') + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"validation_question_5": ' + '"' + isnull(validation_question_5, '') + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"preproc_min": ' + '"' + convert(varchar, preproc_min) + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"default_language_id": ' + '"' + convert(varchar, default_language_id) + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"default_currency_id": ' + '"' + convert(varchar, default_currency_id) + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"default_currency_use_symbol": ' + '"' + convert(varchar, default_currency_use_symbol) + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"default_email_address": ' + '"' + default_email_address + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"public_encryption_key": ' + '"' + isnull(public_encryption_key, '') + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"public_encryption_type": ' + '"' + convert(varchar, isnull(public_encryption_type,'')) + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"user_acct_flg": ' + '"' + convert(varchar, user_acct_flg) + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"pwd_history_count": ' + '"' + convert(varchar, pwd_history_count) + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"min_pwd_days": ' + '"' + convert(varchar, min_pwd_days) + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"max_pwd_days": ' + '"' + convert(varchar, max_pwd_days) + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"sso_redirect_flg": ' + '"' + isnull(sso_redirect_url,'') + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"cat_acct_search_type": ' + '"' + convert(varchar, isnull(cat_acct_search_type,'')) + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"sso_redirect_querystring_flg": ' + '"' + convert(varchar, sso_redirect_querystring_flg) + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"timezone": ' + '"' + isnull(timezone,'') + '"' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + '}' + char(10) +
	   char(9) + char(9) + char(9) + '}'
from t_client

print @json
