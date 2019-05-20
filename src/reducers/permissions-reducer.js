import constants from "./../constants";
const { c } = constants;

export default (state = {}, action) => {};
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
  case c.RECEIVE_PERMISSION: {
    newState = Object.assign({}, state);
    newState[action.permission.id] = action.permission;
    return newState;
  }
  default: {
    return state;
  }
}
