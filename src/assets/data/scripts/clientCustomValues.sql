declare @tab table (section tinyint, textline nvarchar(max));

insert into @tab values(1, '{' + char(10) + char(9) + '"clientCustomValues": ' + '[');

insert into @tab (section, textline)
select 2, char(9) + char(9) + char(9) + char(9) + '{' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"client_id": ' + '"' + convert(nvarchar, client_id) + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"custom_value_id": ' + '"' + convert(varchar, isnull(custom_value_id,'')) + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"custom_type_id": ' + '"' + convert(varchar, isnull(custom_type_id,'')) + '"' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + '},'
from t_client_custom
order by custom_value_id
insert into @tab (section, textline)
select 3, char(9) + char(9) + ']' + char(10) + '}'; 

select textline from @tab order by section
