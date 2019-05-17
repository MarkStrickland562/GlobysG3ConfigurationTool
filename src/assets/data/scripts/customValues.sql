declare @tab table (section tinyint, textline nvarchar(max));

insert into @tab values(1, '{' + char(10) + char(9) + '"customValues": ' + '{');

insert into @tab (section, textline)
select 2, char(9) + char(9) + '"' + convert(varchar, custom_value_id) + '": ' + '{' +  + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"custom_type_id": ' + '"' + convert(varchar, custom_type_id) + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"description": ' + '"' + isnull(description, '') + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"char_value": ' + '"' + isnull(replace(replace(replace(replace(replace(char_value,'\','\\'),'"','\"'),char(10),'\\n'),char(13),'\\r'),char(9),'\\t'), '') + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"num_value": ' + '"' + isnull(convert(varchar, num_value), '') + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"default_value": ' + '"' + convert(varchar, isnull(default_value,'')) + '"' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + '},'
from t_custom_value
order by custom_value_id
insert into @tab (section, textline)
select 3, char(9) + char(9) + '}' + char(10) + '}'; 

select textline from @tab order by section
