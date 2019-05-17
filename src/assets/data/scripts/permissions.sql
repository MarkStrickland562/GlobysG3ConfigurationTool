declare @tab table (section tinyint, textline nvarchar(max));

insert into @tab values(1, '{' + char(10) + char(9) + '"permissions": ' + '{');

insert into @tab (section, textline)
select 2, char(9) + char(9) + '"' + convert(varchar, permission_id) + '": ' + '{' +  + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"nme": ' + '"' + nme + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"type": ' + '"' + type + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"user_flg": ' + '"' + convert(varchar, user_flg) + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"permission_category_id": ' + '"' + convert(varchar, permission_category_id) + '",' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + char(9) + '"permission_description": ' + '"' + isnull(permission_description,'') + '"' + char(10) +
	   char(9) + char(9) + char(9) + char(9) + '},'
from t_permission
order by permission_id
insert into @tab (section, textline)
select 3, char(9) + char(9) + '}' + char(10) + '}'; 

select textline from @tab order by section
