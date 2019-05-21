import clientsReducer from './clients-reducer';
import selectedClientReducer from './selected-client-reducer';
import productsReducer from './products-reducer';
import selectedProductReducer from './selected-product-reducer';
import groupsReducer from './groups-reducer';
import selectedGroupReducer from './selected-group-reducer';
import permissionsReducer from './permissions-reducer';
import permissionCategoriesReducer from './permission-categories-reducer';
import clientPermissionsReducer from './client-permissions-reducer';
import productPermissionsReducer from './product-permissions-reducer';
import groupPermissionsReducer from './group-permissions-reducer';
import productUserTypePermissionsReducer from './product-user-type-permissions-reducer';
import customValuesReducer from './custom-values-reducer';
import customTypesReducer from './custom-types-reducer';
import clientCustomValuesReducer from './client-custom-values-reducer';
import productCustomValuesReducer from './product-custom-values-reducer';
import groupCustomValuesReducer from './group-custom-values-reducer';
import { combineReducers } from 'redux';

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
