declare @tab table (section tinyint, textline nvarchar(max));

insert into @tab values(1, '{' + char(10) + char(9) + '"customTypes": ' + '{');

insert into @tab (section, textline)
select 2, char(9) + char(9) + '"' + convert(varchar, custom_type_id) + '": ' + '{' +  + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"custom_type_name": ' + '"' + custom_type_name + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"custom_input_type": ' + '"' + custom_input_type + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"custom_type_category_id": ' + '"' + convert(varchar, isnull(custom_type_category_id,'')) + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"custom_type_description": ' + '"' + isnull(replace(replace(replace(custom_type_description, '\', '\\'), '/', '\/'), '"', '\"'),'') + '"' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + '},'
from t_custom_type
order by custom_type_id
insert into @tab (section, textline)
select 3, char(9) + char(9) + '}' + char(10) + '}'; 

select textline from @tab order by section
