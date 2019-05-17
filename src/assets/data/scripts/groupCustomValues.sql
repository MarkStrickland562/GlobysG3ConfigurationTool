declare @tab table (section tinyint, textline nvarchar(max));

insert into @tab values(1, '{' + char(10) + char(9) + '"groupCustomValues": ' + '[');

insert into @tab (section, textline)
select 2, char(9) + char(9) + char(9) + char(9) + '{' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"group_id": ' + '"' + convert(nvarchar, group_id) + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"custom_value_id": ' + '"' + convert(varchar, isnull(custom_value_id,'')) + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"custom_type_id": ' + '"' + convert(varchar, isnull(custom_type_id,'')) + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"intersect_custom_value_id": ' + '"' + isnull(convert(varchar, intersect_custom_value_id),'') + '"' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + '},'
from t_group_custom
order by custom_value_id
insert into @tab (section, textline)
select 3, char(9) + char(9) + ']' + char(10) + '}'; 

select textline from @tab order by section
