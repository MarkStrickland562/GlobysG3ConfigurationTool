declare @tab table (section tinyint, textline nvarchar(max));

insert into @tab values(1, '{' + char(10) + char(9) + '"permissionCategories": ' + '{');

insert into @tab (section, textline)
select 2, char(9) + char(9) + '"' + convert(varchar, permission_category_id) + '": ' + '{' +  + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"permission_category_name": ' + '"' + permission_category_name + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"display_order": ' + '"' + convert(varchar, isnull(display_order,'')) + '"' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + '},'
from t_permission_category
order by permission_category_id
insert into @tab (section, textline)
select 3, char(9) + char(9) + '}' + char(10) + '}'; 

select textline from @tab order by section
