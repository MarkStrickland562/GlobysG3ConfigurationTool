declare @tab table (section tinyint, textline nvarchar(max));

insert into @tab values(1, '{' + char(10) + char(9) + '"clientPermissions": ' + '[');

insert into @tab (section, textline)
select 2, char(9) + char(9) + char(9) + char(9) + '{' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"client_id": ' + '"' + convert(nvarchar, client_id) + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"permission_id": ' + '"' + convert(varchar, isnull(permission_id,'')) + '"' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + '},'
from t_client_permission
order by permission_id
insert into @tab (section, textline)
select 3, char(9) + char(9) + ']' + char(10) + '}'; 

select textline from @tab order by section
