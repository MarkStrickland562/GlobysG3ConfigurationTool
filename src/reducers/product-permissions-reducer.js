import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  let newState;
  const { id, product_id, permission_id } = action;

  switch (action.type) {
  case c.ADD_PRODUCT_PERMISSION: {
    newState = Object.assign({}, state, {
      [id]: {
        product_id: product_id,
        permission_id: permission_id
      }
    });
    return newState;
  }
  case c.EDIT_PRODUCT_PERMISSION: {
    const newProductPermission = Object.assign(
      {},
      state[id],
      { product_id },
      { permission_id }
    );
    newState = Object.assign({}, state, {
      [id]: newProductPermission
    });
    return newState;
  }
  case c.DELETE_PRODUCT_PERMISSION: {
    newState = Object.assign({}, state);
    delete newState[action.productPermission.id];
    return newState;
  }
  case c.RECEIVE_PRODUCT_PERMISSION: {
    newState = Object.assign({}, state);
    newState[action.productPermission.id] = action.productPermission;
    return newState;
  }
  case c.RECEIVE_DELETED_PRODUCT_PERMISSION: {
    newState = Object.assign({}, state);
    delete newState[action.productPermissionId];
    return newState;
  }
  default: {
    return state;
  }
  }
};
