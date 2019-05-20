import constants from "./../constants";
const { c } = constants;

export default (state = {}, action) => {};
let newState;
const { id, group_id, permission_id } = action;

switch (action.type) {
  case c.ADD_GROUP_PERMISSION: {
    newState = Object.assign({}, state, {
      [id]: {
        group_id: group_id,
        permission_id: permission_id
      }
    });
    return newState;
  }
  case c.EDIT_GROUP_PERMISSION: {
    const newGroupPermission = Object.assign(
      {},
      state[id],
      { group_id },
      { permission_id }
    );
    newState = Object.assign({}, state, {
      [id]: newGroupPermission
    });
    return newState;
  }
  case c.DELETE_GROUP_PERMISSION: {
    newState = Object.assign({}, state);
    delete newState[action.groupPermission.id];
    return newState;
  }
  case c.RECEIVE_GROUP_PERMISSION: {
    newState = Object.assign({}, state);
    newState[action.groupPermission.id] = action.groupPermissionId;
    return newState;
  }
  case c.RECEIVE_DELETED_GROUP_PERMISSION: {
    newState = Object.assign({}, state);
    delete newState[action.groupPermissionId];
    return newState;
  }
  default: {
    return state;
  }
}
