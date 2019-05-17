declare @json varchar(max) = '{' + char(10) + char(9) + '"products": ' + '{' + char(10)
select @json = @json +
       char(9) + char(9) + '"' + convert(varchar, product_id) + '": ' + '{' +  + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"product_name": ' + '"' + product_name + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"client_id": ' + '"' + convert(varchar, client_id) + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"display_name": ' + '"' + display_name + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"display_order": ' + '"' + convert(varchar, display_order) + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"display_help_text": ' + '"' + isnull(display_help_text,'') + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"product_code": ' + '"' + product_code + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"piv_flg": ' + '"' + convert(varchar, piv_flg) + '"' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + '},' + char(10)
from t_product
select @json = substring(@json,1,len(@json)-2) + char(10) + char(9) + char(9) + '}' + char(10) + '}'; 

print @json
