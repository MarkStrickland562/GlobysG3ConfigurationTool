import constants from "./../constants";
const { c } = constants;

export default (state = {}, action) => {};
let newState;
const { id, permission_id, product_id, user_type } = action;

switch (action.type) {
  case c.ADD_PRODUCT_USER_TYPE_PERMISSION: {
    newState = Object.assign({}, state, {
      [id]: {
        permission_id: permission_id,
        product_id: product_id,
        user_type: user_type
      }
    });
    return newState;
  }
  case c.EDIT_PRODUCT_USER_TYPE_PERMISSION: {
    const newProductPermission = Object.assign(
      {},
      state[id],
      { permission_id },
      { product_id },
      { user_type }
    );
    newState = Object.assign({}, state, {
      [id]: newProductUserTypePermission
    });
    return newState;
  }
  case c.DELETE_PRODUCT_USER_TYPE_PERMISSION: {
    newState = Object.assign({}, state);
    delete newState[action.productUserTypePermission.id];
    return newState;
  }
  case c.RECEIVE_PRODUCT_USER_TYPE_PERMISSION: {
    newState = Object.assign({}, state);
    newState[action.productUserTypePermission.id] =
      action.productUserTypePermissionId;
    return newState;
  }
  case c.RECEIVE_DELETED_PRODUCT_USER_TYPE_PERMISSION: {
    newState = Object.assign({}, state);
    delete newState[action.productUserTypePermissionId];
    return newState;
  }
  default: {
    return state;
  }
}
