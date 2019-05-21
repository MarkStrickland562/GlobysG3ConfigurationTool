import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  let newState;
  const {
    id,
    nme,
    permission_category_id,
    permission_description,
    type,
    userflg
  } = action;

  switch (action.type) {
  case c.ADD_PERMISSION: {
    newState = Object.assign({}, state, {
      [id]: {
        nme: nme,
        permission_category_id: permission_category_id,
        permission_description: permission_description,
        type: type,
        userflg: userflg
      }
    });
    return newState;
  }
  case c.EDIT_PERMISSION: {
    const newPermission = Object.assign(
      {},
      state[id],
      { id },
      { nme },
      { permission_category_id },
      { permission_description },
      { type },
      { userflg }
    );
    newState = Object.assign({}, state, {
      [id]: newPermission
    });
    return newState;
  }
  case c.DELETE_PERMISSION: {
    newState = Object.assign({}, state);
    delete newState[action.permission.id];
    return newState;
  }
  case c.RECEIVE_PERMISSION: {
    newState = Object.assign({}, state);
    newState[action.permission.id] = action.permission;
    return newState;
  }
  case c.RECEIVE_DELETED_PERMISSION: {
    newState = Object.assign({}, state);
    delete newState[action.permissionId];
    return newState;
  }
  default: {
    return state;
  }
  }
};
