import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  let newState;
  const { id, display_order, permission_category_name } = action;

  switch (action.type) {
  case c.ADD_PERMISSION_CATEGORY: {
    newState = Object.assign({}, state, {
      [id]: {
        display_order: display_order,
        permission_category_name: permission_category_name
      }
    });
    return newState;
  }
  case c.EDIT_PERMISSION_CATEGORY: {
    const newPermissionCategory = Object.assign(
      {},
      state[id],
      { display_order },
      { permission_category_name }
    );
    newState = Object.assign({}, state, {
      [id]: newPermissionCategory
    });
    return newState;
  }
  case c.DELETE_PERMISSION_CATEGORY: {
    newState = Object.assign({}, state);
    delete newState[action.permissionCategory.id];
    return newState;
  }
  case c.RECEIVE_PERMISSION_CATEGORY: {
    newState = Object.assign({}, state);
    newState[action.permissionCategory.id] = action.permissionCategory;
    return newState;
  }
  case c.RECEIVE_DELETED_PERMISSION_CATEGORY: {
    newState = Object.assign({}, state);
    delete newState[action.permissionCategoryId];
    return newState;
  }
  default: {
    return state;
  }
  }
};

