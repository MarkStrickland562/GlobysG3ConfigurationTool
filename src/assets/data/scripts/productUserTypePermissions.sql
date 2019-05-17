declare @tab table (section tinyint, textline nvarchar(max));

insert into @tab values(1, '{' + char(10) + char(9) + '"productUserTypePermissions": ' + '[');

insert into @tab (section, textline)
select 2, char(9) + char(9) + char(9) + char(9) + '{' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"product_id": ' + '"' + convert(nvarchar, product_id) + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"user_type": ' + '"' + convert(nvarchar, user_type) + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"permission_id": ' + '"' + convert(varchar, isnull(permission_id,'')) + '"' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + '},'
from t_audit_product_permission_user_type
order by product_id, user_type, permission_id
insert into @tab (section, textline)
select 3, char(9) + char(9) + ']' + char(10) + '}'; 

select textline from @tab order by section
