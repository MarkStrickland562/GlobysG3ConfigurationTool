declare @tab table (section tinyint, textline nvarchar(max));

insert into @tab values(1, '{' + char(10) + char(9) + '"groups": ' + '{');

insert into @tab (section, textline)
select 2, char(9) + char(9) + '"' + convert(varchar, group_id) + '": ' + '{' +  + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"group_name": ' + '"' + group_name + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"client_id": ' + '"' + convert(varchar, client_id) + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"viewable_flg": ' + '"' + convert(varchar, viewable_flg) + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"group_priority": ' + '"' + isnull(convert(varchar, group_priority),'') + '"' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + '},'
from t_group
order by group_id
insert into @tab (section, textline)
select 3, char(9) + char(9) + '}' + char(10) + '}'; 

select textline from @tab order by section
