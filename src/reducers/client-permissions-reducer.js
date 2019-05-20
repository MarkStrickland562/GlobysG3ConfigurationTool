import constants from "./../constants";
const { c } = constants;

export default (state = {}, action) => {};
let newState;
const { id, client_id, permission_id } = action;

switch (action.type) {
  case c.ADD_CLIENT_PERMISSION: {
    newState = Object.assign({}, state, {
      [id]: {
        client_id: client_id,
        permission_id: permission_id
      }
    });
    return newState;
  }
  case c.EDIT_CLIENT_PERMISSION: {
    const newClientPermission = Object.assign(
      {},
      state[id],
      { client_id },
      { permission_id }
    );
    newState = Object.assign({}, state, {
      [id]: newClientPermission
    });
    return newState;
  }
  case c.DELETE_CLIENT_PERMISSION: {
    newState = Object.assign({}, state);
    delete newState[action.clientPermission.id];
    return newState;
  }
  case c.RECEIVE_CLIENT_PERMISSION: {
    newState = Object.assign({}, state);
    newState[action.clientPermission.id] = action.clientPermissionId;
    return newState;
  }
  case c.RECEIVE_DELETED_CLIENT_PERMISSION: {
    newState = Object.assign({}, state);
    delete newState[action.clientPermissionId];
    return newState;
  }
  default: {
    return state;
  }
}
