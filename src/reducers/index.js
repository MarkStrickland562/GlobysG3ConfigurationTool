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
  masterClients: clientsReducer,
  selectedClient: selectedClientReducer,
  masterProducts: productsReducer,
  selectedProduct: selectedProductReducer,
  masterGroups: groupsReducer,
  selectedGroup: selectedGroupReducer,
  masterPermissions: permissionsReducer,
  masterPermissionCategories: permissionCategoriesReducer,
  masterClientPermissions: clientPermissionsReducer,
  masterProductPermissions: productPermissionsReducer,
  masterGroupPermissions: groupPermissionsReducer,
  masterProductUserTypePermissions: productUserTypePermissionsReducer,
  masterCustomValues: customValuesReducer,
  masterCustomTypes: customTypesReducer,
  masterClientCustomValues: clientCustomValuesReducer,
  masterProductCustomValues: productCustomValuesReducer,
  masterGroupCustomValues: groupCustomValuesReducer
});

export default rootReducer;
