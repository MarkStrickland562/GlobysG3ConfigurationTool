import clientsReducer from "./clients-reducer";
import selectedClientReducer from "./selected-client-reducer";
import productsReducer from "./products-reducer";
import selectedProductReducer from "./selected-product-reducer";
import groupsReducer from "./groups-reducer";
import selectedGroupReducer from "./selected-group-reducer";
import permissionsReducer from "./permissions-reducer";
import permissionCategoriesReducer from "./permissionCategories-reducer";
import clientPermissionsReducer from "./clientPermissions-reducer";
import productPermissionsReducer from "./productPermissions-reducer";
import groupPermissionsReducer from "./groupPermissions-reducer";
import productUserTypePermissionsReducer from "./productUserTypePermissions-reducer";
import customValuesReducer from "./customValues-reducer";
import customTypesReducer from "./customTypes-reducer";
import clientCustomValuesReducer from "./clientCustomValues-reducer";
import productCustomValuesReducer from "./productCustomValues-reducer";
import groupCustomValuesReducer from "./groupCustomValues-reducer";

const rootReducer = combineReducers({
  masterclients: clientsReducer,
  selectedClient: selectedClientReducer,
  masterproducts: productsReducer,
  selectedProduct: selectedProductReducer,
  mastergroups: groupsReducer,
  selectedGroup: selectedGroupReducer,
  masterpermissions: permissionsReducer,
  masterpermissioncategories: permissionCategoriesReducer,
  masterclientpermissions: clientPermissionsReducer,
  masterproductpermissions: productPermissionsReducer,
  mastergrouppermissions: groupPermissionsReducer,
  masterproductusertypepermissions: productUserTypePermissionsReducer,
  mastercustomvalues: customValuesReducer,
  mastercustomtypes: customTypesReducer,
  masterclientcustomvalues: clientCustomValuesReducer,
  masterproductcustomvalues: productCustomValuesReducer,
  mastergroupcustomvalues: groupCustomValuesReducer
});

export default rootReducer;
