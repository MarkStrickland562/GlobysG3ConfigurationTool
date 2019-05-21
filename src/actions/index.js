import constants from './../constants';
const { firebaseConfig, c } = constants;

/*eslint-disable */
import Firebase from 'firebase';

firebase.initializeApp(firebaseConfig);

const clients = firebase.database().ref("clients");
const products = firebase.database().ref("products");
const groups = firebase.database().ref("groups");
const permissions = firebase.database().ref("permissions");
const permissionCategories = firebase.database().ref("permissionCategories");
const clientPermissions = firebase.database().ref("clientPermissions");
const productPermissions = firebase.database().ref("productPermissions");
const groupPermissions = firebase.database().ref("groupPermissions");
const productUserTypePermissions = firebase
  .database()
  .ref("productUserTypePermissions");
const customValues = firebase.database().ref("customValues");
const customTypes = firebase.database().ref("customTypes");
const clientCustomValues = firebase.database().ref("clientCustomValues");
const productCustomValues = firebase.database().ref("productCustomValues");
const groupCustomValues = firebase.database().ref("groupCustomValues");
/*eslint-enable */

export function addClient(
  _id,
  _cat_acct_search_type,
  _client_ad_nme,
  _default_currency_id,
  _default_currency_use_symbol,
  _default_email_address,
  _default_language_id,
  _encrypt_key,
  _external_id,
  _login,
  _max_pwd_days,
  _min_pwd_days,
  _nme,
  _password,
  _preproc_min,
  _public_encryption_key,
  _public_encryption_type,
  _pwd_history_count,
  _sso_redirect_flg,
  _sso_redirect_querystring_flg,
  _timezone,
  _user_acct_flg,
  _validation_question_1,
  _validation_question_2,
  _validation_question_3,
  _validation_question_4,
  _validation_question_5
) {
  return () =>
    clients.push({
      cat_acct_search_type: _cat_acct_search_type,
      client_ad_nme: _client_ad_nme,
      default_currency_id: _default_currency_id,
      default_currency_use_symbol: _default_currency_use_symbol,
      default_email_address: _default_email_address,
      default_language_id: _default_language_id,
      encrypt_key: _encrypt_key,
      external_id: _external_id,
      login: _login,
      max_pwd_days: _max_pwd_days,
      min_pwd_days: _min_pwd_days,
      nme: _nme,
      password: _password,
      preproc_min: _preproc_min,
      public_encryption_key: _public_encryption_key,
      public_encryption_type: _public_encryption_type,
      pwd_history_count: _pwd_history_count,
      sso_redirect_flg: _sso_redirect_flg,
      sso_redirect_querystring_flg: _sso_redirect_querystring_flg,
      timezone: _timezone,
      user_acct_flg: _user_acct_flg,
      validation_question_1: _validation_question_1,
      validation_question_2: _validation_question_2,
      validation_question_3: _validation_question_3,
      validation_question_4: _validation_question_4,
      validation_question_5: _validation_question_5
    });
}

export function editClient(
  _id,
  _cat_acct_search_type,
  _client_ad_nme,
  _default_currency_id,
  _default_currency_use_symbol,
  _default_email_address,
  _default_language_id,
  _encrypt_key,
  _external_id,
  _login,
  _max_pwd_days,
  _min_pwd_days,
  _nme,
  _password,
  _preproc_min,
  _public_encryption_key,
  _public_encryption_type,
  _pwd_history_count,
  _sso_redirect_flg,
  _sso_redirect_querystring_flg,
  _timezone,
  _user_acct_flg,
  _validation_question_1,
  _validation_question_2,
  _validation_question_3,
  _validation_question_4,
  _validation_question_5
) {
  /*eslint-disable */
  var clientToUpdate = firebase.database().ref("clients/" + _id);
  /*eslint-enable */
  return () =>
    clientToUpdate.update({
      cat_acct_search_type: _cat_acct_search_type,
      client_ad_nme: _client_ad_nme,
      default_currency_id: _default_currency_id,
      default_currency_use_symbol: _default_currency_use_symbol,
      default_email_address: _default_email_address,
      default_language_id: _default_language_id,
      encrypt_key: _encrypt_key,
      external_id: _external_id,
      login: _login,
      max_pwd_days: _max_pwd_days,
      min_pwd_days: _min_pwd_days,
      nme: _nme,
      password: _password,
      preproc_min: _preproc_min,
      public_encryption_key: _public_encryption_key,
      public_encryption_type: _public_encryption_type,
      pwd_history_count: _pwd_history_count,
      sso_redirect_flg: _sso_redirect_flg,
      sso_redirect_querystring_flg: _sso_redirect_querystring_flg,
      timezone: _timezone,
      user_acct_flg: _user_acct_flg,
      validation_question_1: _validation_question_1,
      validation_question_2: _validation_question_2,
      validation_question_3: _validation_question_3,
      validation_question_4: _validation_question_4,
      validation_question_5: _validation_question_5
    });
}

export function deleteClient(_id) {
  /*eslint-disable */
  var clientToDelete = firebase.database().ref("clients/" + _id);
  /*eslint-enable */
  return () => clientToDelete.remove();
}

export function watchFirebaseClientsRef() {
  return function(dispatch) {
    clients.on('child_added', data => {
      const newClient = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveClient(newClient));
    });
    clients.on('child_changed', data => {
      const updatedClient = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveClient(updatedClient));
    });
    clients.on('child_removed', data => {
      dispatch(receiveDeletedClient(data.getKey()));
    });
  };
}

function receiveClient(clientFromFirebase) {
  return {
    type: c.RECEIVE_CLIENT,
    client: clientFromFirebase
  };
}

function receiveDeletedClient(clientId) {
  return {
    type: c.RECEIVE_DELETED_CLIENT,
    clientId: clientId
  };
}

export function addProduct(
  _id,
  _client_id,
  _display_help_text,
  _display_name,
  _display_order,
  _piv_flg,
  _product_code,
  _product_name
) {
  return () =>
    products.push({
      client_id: _client_id,
      display_help_text: _display_help_text,
      display_name: _display_name,
      display_order: _display_order,
      piv_flg: _piv_flg,
      product_code: _product_code,
      product_name: _product_name
    });
}

export function editProduct(
  _id,
  _client_id,
  _display_help_text,
  _display_name,
  _display_order,
  _piv_flg,
  _product_code,
  _product_name
) {
  /*eslint-disable */
  var productToUpdate = firebase.database().ref("products/" + _id);
  /*eslint-enable */
  return () =>
    productToUpdate.update({
      client_id: _client_id,
      display_help_text: _display_help_text,
      display_name: _display_name,
      display_order: _display_order,
      piv_flg: _piv_flg,
      product_code: _product_code,
      product_name: _product_name
    });
}

export function deleteProduct(_id) {
  /*eslint-disable */
  var productToDelete = firebase.database().ref("products/" + _id);
  /*eslint-enable */
  return () => productToDelete.remove();
}

export function watchFirebaseProductsRef() {
  return function(dispatch) {
    products.on('child_added', data => {
      const newProduct = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveProduct(newProduct));
    });
    products.on('child_changed', data => {
      const updatedProduct = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveProduct(updatedProduct));
    });
    products.on('child_removed', data => {
      dispatch(receiveDeletedProduct(data.getKey()));
    });
  };
}

function receiveProduct(productFromFirebase) {
  return {
    type: c.RECEIVE_PRODUCT,
    product: productFromFirebase
  };
}

function receiveDeletedProduct(productId) {
  return {
    type: c.RECEIVE_DELETED_PRODUCT,
    productId: productId
  };
}

export function addGroup(
  _id,
  _client_id,
  _group_name,
  _group_priority,
  _viewable_flg
) {
  return () =>
    groups.push({
      client_id: _client_id,
      group_name: _group_name,
      group_priority: _group_priority,
      viewable_flg: _viewable_flg
    });
}

export function editGroup(
  _id,
  _client_id,
  _group_name,
  _group_priority,
  _viewable_flg
) {
  /*eslint-disable */
  var groupToUpdate = firebase.database().ref("groups/" + _id);
  /*eslint-enable */
  return () =>
    groupToUpdate.update({
      client_id: _client_id,
      group_name: _group_name,
      group_priority: _group_priority,
      viewable_flg: _viewable_flg
    });
}

export function deleteGroup(_id) {
  /*eslint-disable */
  var groupToDelete = firebase.database().ref("groups/" + _id);
  /*eslint-enable */
  return () => groupToDelete.remove();
}

export function watchFirebaseGroupsRef() {
  return function(dispatch) {
    groups.on('child_added', data => {
      const newGroup = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveGroup(newGroup));
    });
    groups.on('child_changed', data => {
      const updatedGroup = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveGroup(updatedGroup));
    });
    groups.on('child_removed', data => {
      dispatch(receiveDeletedGroup(data.getKey()));
    });
  };
}

function receiveGroup(groupFromFirebase) {
  return {
    type: c.RECEIVE_GROUP,
    group: groupFromFirebase
  };
}

function receiveDeletedGroup(groupId) {
  return {
    type: c.RECEIVE_DELETED_GROUP,
    groupId: groupId
  };
}

export function addClientCustomValue(
  _id,
  _client_id,
  _custom_type_id,
  _custom_value_id
) {
  return () =>
    clientCustomValues.push({
      client_id: _client_id,
      custom_type_id: _custom_type_id,
      custom_value_id: _custom_value_id
    });
}

export function editClientCustomValue(
  _id,
  _client_id,
  _custom_type_id,
  _custom_value_id
) {
  /*eslint-disable */
  var clientCustomValueToUpdate = firebase
    .database()
    .ref("clientCustomValues/" + _id);
  /*eslint-enable */
  return () =>
    clientCustomValueToUpdate.update({
      client_id: _client_id,
      custom_type_id: _custom_type_id,
      custom_value_id: _custom_value_id
    });
}

export function deleteClientCustomValue(_id) {
  /*eslint-disable */
  var clientCustomValueToDelete = firebase
    .database()
    .ref("clientCustomValues/" + _id);
  /*eslint-enable */
  return () => clientCustomValueToDelete.remove();
}

export function watchFirebaseClientCustomValuesRef() {
  return function(dispatch) {
    clientCustomValues.on('child_added', data => {
      const newClientCustomValue = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveClientCustomValue(newClientCustomValue));
    });
    clientCustomValues.on('child_changed', data => {
      const updatedClientCustomValue = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveClientCustomValue(updatedClientCustomValue));
    });
    clientCustomValues.on('child_removed', data => {
      dispatch(receiveDeletedClientCustomValue(data.getKey()));
    });
  };
}

function receiveClientCustomValue(clientCustomValueFromFirebase) {
  return {
    type: c.RECEIVE_CLIENT_CUSTOM_VALUE,
    clientCustomValue: clientCustomValueFromFirebase
  };
}

function receiveDeletedClientCustomValue(clientCustomValueId) {
  return {
    type: c.RECEIVE_DELETED_CLIENT_CUSTOM_VALUE,
    clientCustomValueId: clientCustomValueId
  };
}

export function addClientPermission(_id, _client_id, _permission_id) {
  return () =>
    clientPermissions.push({
      client_id: _client_id,
      permission_id: _permission_id
    });
}

export function editClientPermission(_id, _client_id, _permission_id) {
  /*eslint-disable */
  var clientPermissionToUpdate = firebase
    .database()
    .ref("clientPermissions/" + _id);
  /*eslint-enable */
  return () =>
    clientPermissionToUpdate.update({
      client_id: _client_id,
      permission_id: _permission_id
    });
}

export function deleteClientPermission(_id) {
  /*eslint-disable */
  var clientPermissionToDelete = firebase
    .database()
    .ref("clientPermissions/" + _id);
  /*eslint-enable */
  return () => clientPermissionToDelete.remove();
}

export function watchFirebaseClientPermissionsRef() {
  return function(dispatch) {
    clientPermissions.on('child_added', data => {
      const newClientPermission = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveClientPermission(newClientPermission));
    });
    clientPermissions.on('child_changed', data => {
      const updatedClientPermission = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveClientPermission(updatedClientPermission));
    });
    clientPermissions.on('child_removed', data => {
      dispatch(receiveDeletedClientPermission(data.getKey()));
    });
  };
}

function receiveClientPermission(clientPermissionFromFirebase) {
  return {
    type: c.RECEIVE_CLIENT_PERMISSION,
    clientPermission: clientPermissionFromFirebase
  };
}

function receiveDeletedClientPermission(clientPermissionId) {
  return {
    type: c.RECEIVE_DELETED_CLIENT_PERMISSION,
    clientPermissionId: clientPermissionId
  };
}

export function addCustomValue(
  _id,
  _char_value,
  _custom_type_id,
  _default_value,
  _description,
  _num_value
) {
  return () =>
    customValues.push({
      char_value: _char_value,
      custom_type_id: _custom_type_id,
      default_value: _default_value,
      description: _description,
      num_value: _num_value
    });
}

export function editCustomValue(
  _id,
  _char_value,
  _custom_type_id,
  _default_value,
  _description,
  _num_value
) {
  /*eslint-disable */
  var customValueToUpdate = firebase.database().ref("customValues/" + _id);
  /*eslint-enable */
  return () =>
    customValueToUpdate.update({
      char_value: _char_value,
      custom_type_id: _custom_type_id,
      default_value: _default_value,
      description: _description,
      num_value: _num_value
    });
}

export function deleteCustomValue(_id) {
  /*eslint-disable */
  var customValueToDelete = firebase.database().ref("customValues/" + _id);
  /*eslint-enable */
  return () => customValueToDelete.remove();
}

export function watchFirebaseCustomValuesRef() {
  return function(dispatch) {
    customValues.on('child_added', data => {
      const newCustomValue = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveCustomValue(newCustomValue));
    });
    customValues.on('child_changed', data => {
      const updatedCustomValue = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveCustomValue(updatedCustomValue));
    });
    customValues.on('child_removed', data => {
      dispatch(receiveDeletedCustomValue(data.getKey()));
    });
  };
}

function receiveCustomValue(customValueFromFirebase) {
  return {
    type: c.RECEIVE_CUSTOM_VALUE,
    customValue: customValueFromFirebase
  };
}

function receiveDeletedCustomValue(customValueId) {
  return {
    type: c.RECEIVE_DELETED_CUSTOM_VALUE,
    customValueId: customValueId
  };
}


export function addCustomType(
  _id,
  _custom_input_type,
  _custom_type_category_id,
  _custom_type_description,
  _custom_type_name
) {
  return () =>
    customTypes.push({
      custom_input_type: _custom_input_type,
      custom_type_category_id: _custom_type_category_id,
      custom_type_description: _custom_type_description,
      custom_type_name: _custom_type_name
    });
}

export function editCustomType(
  _id,
  _custom_input_type,
  _custom_type_category_id,
  _custom_type_description,
  _custom_type_name
) {
  /*eslint-disable */
  var customTypeToUpdate = firebase.database().ref("customTypes/" + _id);
  /*eslint-enable */
  return () =>
    customTypeToUpdate.update({
      custom_input_type: _custom_input_type,
      custom_type_category_id: _custom_type_category_id,
      custom_type_description: _custom_type_description,
      custom_type_name: _custom_type_name
    });
}

export function deleteCustomType(_id) {
  /*eslint-disable */
  var customTypeToDelete = firebase.database().ref("customTypes/" + _id);
  /*eslint-enable */
  return () => customTypeToDelete.remove();
}

export function watchFirebaseCustomTypesRef() {
  return function(dispatch) {
    customTypes.on('child_added', data => {
      const newCustomType = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveCustomType(newCustomType));
    });
    customTypes.on('child_changed', data => {
      const updatedCustomType = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveCustomType(updatedCustomType));
    });
    customTypes.on('child_removed', data => {
      dispatch(receiveDeletedCustomType(data.getKey()));
    });
  };
}

function receiveCustomType(customTypeFromFirebase) {
  return {
    type: c.RECEIVE_CUSTOM_TYPE,
    customType: customTypeFromFirebase
  };
}

function receiveDeletedCustomType(customTypeId) {
  return {
    type: c.RECEIVE_DELETED_CUSTOM_TYPE,
    customTypeId: customTypeId
  };
}

export function addPermission(
  _id,
  _nme,
  _permission_category_id,
  _permission_description,
  _type,
  _userflg  
) {
  return () =>
    permissions.push({
      nme: _nme,
      permission_category_id: _permission_category_id,
      permission_description: _permission_description,
      type: _type,
      userflg: _userflg
    });
}

export function editPermission(
  _id,
  _nme,
  _permission_category_id,
  _permission_description,
  _type,
  _userflg  
) {
  /*eslint-disable */
  var permissionToUpdate = firebase.database().ref("permissions/" + _id);
  /*eslint-enable */
  return () =>
    permissionToUpdate.update({
      nme: _nme,
      permission_category_id: _permission_category_id,
      permission_description: _permission_description,
      type: _type,
      userflg: _userflg
    });
}

export function deletePermission(_id) {
  /*eslint-disable */
  var permissionToDelete = firebase.database().ref("permissions/" + _id);
  /*eslint-enable */
  return () => permissionToDelete.remove();
}

export function watchFirebasePermissionsRef() {
  return function(dispatch) {
    permissions.on('child_added', data => {
      const newPermission = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receivePermission(newPermission));
    });
    permissions.on('child_changed', data => {
      const updatedPermission = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receivePermission(updatedPermission));
    });
    permissions.on('child_removed', data => {
      dispatch(receiveDeletedPermission(data.getKey()));
    });
  };
}

function receivePermission(permissionFromFirebase) {
  return {
    type: c.RECEIVE_PERMISSION,
    permission: permissionFromFirebase
  };
}

function receiveDeletedPermission(permissionId) {
  return {
    type: c.RECEIVE_DELETED_PERMISSION,
    permissionId: permissionId
  };
}


export function addPermissionCategory(
  _id,
  _display_order,
  _permission_category_name
) {
  return () =>
    permissionCategories.push({
      display_order: _display_order,
      permission_category_name: _permission_category_name
    });
}

export function editPermissionCategory(
  _id,
  _display_order,
  _permission_category_name
) {
  /*eslint-disable */
  var permissionCategoryToUpdate = firebase.database().ref("permissionCategories/" + _id);
  /*eslint-enable */
  return () =>
    permissionCategoryToUpdate.update({
      display_order: _display_order,
      permission_category_name: _permission_category_name
    });
}

export function deletePermissionCategory(_id) {
  /*eslint-disable */
  var permissionCategoryToDelete = firebase.database().ref("permissionCategories/" + _id);
  /*eslint-enable */
  return () => permissionCategoryToDelete.remove();
}

export function watchFirebasePermissionCategoriesRef() {
  return function(dispatch) {
    permissionCategories.on('child_added', data => {
      const newPermissionCategory = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receivePermissionCategory(newPermissionCategory));
    });
    permissionCategories.on('child_changed', data => {
      const updatedPermissionCategory = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receivePermissionCategory(updatedPermissionCategory));
    });
    permissionCategories.on('child_removed', data => {
      dispatch(receiveDeletedPermissionCategory(data.getKey()));
    });
  };
}

function receivePermissionCategory(permissionCategoryFromFirebase) {
  return {
    type: c.RECEIVE_PERMISSION_CATEGORY,
    permissionCategory: permissionCategoryFromFirebase
  };
}

function receiveDeletedPermissionCategory(permissionCategoryId) {
  return {
    type: c.RECEIVE_DELETED_PERMISSION_CATEGORY,
    permissionCategoryId: permissionCategoryId
  };
}

export function addGroupCustomValue(
  _id,
  _custom_type_id,
  _custom_value_id,
  _group_id,
  _intersect_custom_value_id
) {
  return () =>
    groupCustomValues.push({
      custom_type_id: _custom_type_id,
      custom_value_id: _custom_value_id,
      group_id: _group_id,
      intersect_custom_value_id: _intersect_custom_value_id
    });
}

export function editGroupCustomValue(
  _id,
  _custom_type_id,
  _custom_value_id,
  _group_id,
  _intersect_custom_value_id
) {
  /*eslint-disable */
  var groupCustomValueToUpdate = firebase
    .database()
    .ref("groupCustomValues/" + _id);
  /*eslint-enable */
  return () =>
    groupCustomValueToUpdate.update({
      custom_type_id: _custom_type_id,
      custom_value_id: _custom_value_id,
      group_id: _group_id,
      intersect_custom_value_id: _intersect_custom_value_id
    });
}

export function deleteGroupCustomValue(_id) {
  /*eslint-disable */
  var groupCustomValueToDelete = firebase
    .database()
    .ref("groupCustomValues/" + _id);
  /*eslint-enable */
  return () => groupCustomValueToDelete.remove();
}

export function watchFirebaseGroupCustomValuesRef() {
  return function(dispatch) {
    groupCustomValues.on('child_added', data => {
      const newGroupCustomValue = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveGroupCustomValue(newGroupCustomValue));
    });
    groupCustomValues.on('child_changed', data => {
      const updatedGroupCustomValue = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveGroupCustomValue(updatedGroupCustomValue));
    });
    groupCustomValues.on('child_removed', data => {
      dispatch(receiveDeletedGroupCustomValue(data.getKey()));
    });
  };
}

function receiveGroupCustomValue(groupCustomValueFromFirebase) {
  return {
    type: c.RECEIVE_GROUP_CUSTOM_VALUE,
    groupCustomValue: groupCustomValueFromFirebase
  };
}

function receiveDeletedGroupCustomValue(groupCustomValueId) {
  return {
    type: c.RECEIVE_DELETED_GROUP_CUSTOM_VALUE,
    groupCustomValueId: groupCustomValueId
  };
}

export function addGroupPermission(_id, _group_id, _permission_id) {
  return () =>
    groupPermissions.push({
      group_id: _group_id,
      permission_id: _permission_id
    });
}

export function editGroupPermission(_id, _group_id, _permission_id) {
  /*eslint-disable */
  var groupCustomToUpdate = firebase.database().ref("groupPermissions/" + _id);
  /*eslint-enable */
  return () =>
    groupCustomToUpdate.update({
      group_id: _group_id,
      permission_id: _permission_id
    });
}

export function deleteGroupPermission(_id) {
  /*eslint-disable */
  var groupPermissionToDelete = firebase
    .database()
    .ref("groupPermissions/" + _id);
  /*eslint-enable */
  return () => groupPermissionToDelete.remove();
}

export function watchFirebaseGroupPermissionsRef() {
  return function(dispatch) {
    groupPermissions.on('child_added', data => {
      const newGroupPermission = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveGroupPermission(newGroupPermission));
    });
    groupPermissions.on('child_changed', data => {
      const updatedGroupPermission = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveGroupPermission(updatedGroupPermission));
    });
    groupPermissions.on('child_removed', data => {
      dispatch(receiveDeletedGroupPermission(data.getKey()));
    });
  };
}

function receiveGroupPermission(groupPermissionFromFirebase) {
  return {
    type: c.RECEIVE_GROUP_PERMISSION,
    groupPermission: groupPermissionFromFirebase
  };
}

function receiveDeletedGroupPermission(groupPermissionId) {
  return {
    type: c.RECEIVE_DELETED_GROUP_PERMISSION,
    groupPermissionId: groupPermissionId
  };
}

export function addProductPermission(
  _id,
  _permission_id,
  _product_id
) {
  return () =>
    productPermissions.push({
      permission_id: _permission_id,
      product_id: _product_id
    });
}

export function editProductPermission(
  _id,
  _permission_id,
  _product_id
) {
  /*eslint-disable */
  var productPermissionToUpdate = firebase
    .database()
    .ref("productPermissions/" + _id);
  /*eslint-enable */
  return () =>
    productPermissionToUpdate.update({
      permission_id: _permission_id,
      product_id: _product_id
    });
}

export function deleteProductPermission(_id) {
  /*eslint-disable */
  var productPermissionToDelete = firebase
    .database()
    .ref("productPermissions/" + _id);
  /*eslint-enable */
  return () => productPermissionToDelete.remove();
}

export function watchFirebaseProductPermissionsRef() {
  return function(dispatch) {
    productPermissions.on('child_added', data => {
      const newProductPermission = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveProductPermission(newProductPermission));
    });
    productPermissions.on('child_changed', data => {
      const updatedProductPermission = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(
        receiveProductPermission(updatedProductPermission)
      );
    });
    productPermissions.on('child_removed', data => {
      dispatch(receiveDeletedProductPermission(data.getKey()));
    });
  };
}

function receiveProductPermission(
  productPermissionFromFirebase
) {
  return {
    type: c.RECEIVE_PRODUCT_PERMISSION,
    productPermission: productPermissionFromFirebase
  };
}

function receiveDeletedProductPermission(productPermissionId) {
  return {
    type: c.RECEIVE_DELETED_PRODUCT_PERMISSION,
    productPermissionId: productPermissionId
  };
}

export function addProductUserTypePermission(
  _id,
  _permission_id,
  _product_id,
  _user_type
) {
  return () =>
    productUserTypePermissions.push({
      permission_id: _permission_id,
      product_id: _product_id,
      user_type: _user_type
    });
}

export function editProductUserTypePermission(
  _id,
  _permission_id,
  _product_id,
  _user_type
) {
  /*eslint-disable */
  var productUserTypePermissionToUpdate = firebase
    .database()
    .ref("productUserTypePermissions/" + _id);
  /*eslint-enable */
  return () =>
    productUserTypePermissionToUpdate.update({
      permission_id: _permission_id,
      product_id: _product_id,
      user_type: _user_type
    });
}

export function deleteProductUserTypePermission(_id) {
  /*eslint-disable */
  var productUserTypePermissionToDelete = firebase
    .database()
    .ref("productUserTypePermissions/" + _id);
  /*eslint-enable */
  return () => productUserTypePermissionToDelete.remove();
}

export function watchFirebaseProductUserTypePermissionsRef() {
  return function(dispatch) {
    productUserTypePermissions.on('child_added', data => {
      const newProductUserTypePermission = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveProductUserTypePermission(newProductUserTypePermission));
    });
    productUserTypePermissions.on('child_changed', data => {
      const updatedProductUserTypePermission = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(
        receiveProductUserTypePermission(updatedProductUserTypePermission)
      );
    });
    productUserTypePermissions.on('child_removed', data => {
      dispatch(receiveDeletedProductUserTypePermission(data.getKey()));
    });
  };
}

function receiveProductUserTypePermission(
  productUserTypePermissionFromFirebase
) {
  return {
    type: c.RECEIVE_PRODUCT_USER_TYPE_PERMISSION,
    productUserTypePermission: productUserTypePermissionFromFirebase
  };
}

function receiveDeletedProductUserTypePermission(productUserTypePermissionId) {
  return {
    type: c.RECEIVE_DELETED_PRODUCT_USER_TYPE_PERMISSION,
    productUserTypePermissionId: productUserTypePermissionId
  };
}

export function addProductCustomValue(
  _id,
  _custom_type_id,
  _custom_value_id,
  _product_id
) {
  return () =>
    productCustomValues.push({
      custom_type_id: _custom_type_id,
      custom_value_id: _custom_value_id,
      product_id: _product_id
    });
}

export function editProductCustomValue(
  _id,
  _custom_type_id,
  _custom_value_id,
  _product_id
) {
  /*eslint-disable */
  var productCustomValueToUpdate = firebase
    .database()
    .ref("productCustomValues/" + _id);
  /*eslint-enable */
  return () =>
    productCustomValueToUpdate.update({
      custom_type_id: _custom_type_id,
      custom_value_id: _custom_value_id,
      product_id: _product_id
    });
}

export function deleteProductCustomValue(_id) {
  /*eslint-disable */
  var productCustomValueToDelete = firebase
    .database()
    .ref("productCustomValues/" + _id);
  /*eslint-enable */
  return () => productCustomValueToDelete.remove();
}

export function watchFirebaseProductCustomValuesRef() {
  return function(dispatch) {
    productCustomValues.on('child_added', data => {
      const newProductCustomValue = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveProductCustomValue(newProductCustomValue));
    });
    productCustomValues.on('child_changed', data => {
      const updatedProductCustomValue = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveProductCustomValue(updatedProductCustomValue));
    });
    productCustomValues.on('child_removed', data => {
      dispatch(receiveDeletedProductCustomValue(data.getKey()));
    });
  };
}

function receiveProductCustomValue(productCustomValueFromFirebase) {
  return {
    type: c.RECEIVE_PRODUCT_CUSTOM_VALUE,
    productCustomValue: productCustomValueFromFirebase
  };
}

function receiveDeletedProductCustomValue(productCustomValueId) {
  return {
    type: c.RECEIVE_DELETED_PRODUCT_CUSTOM_VALUE,
    productCustomValueId: productCustomValueId
  };
}
