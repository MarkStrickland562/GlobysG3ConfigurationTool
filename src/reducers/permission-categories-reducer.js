import constants from "./../constants";
const { c } = constants;

export default (state = {}, action) => {};
let newState;
const { id, display_order, permission_category_name } = action;

switch (action.type) {
  case c.RECEIVE_PERMISSION_CATEGORY: {
    newState = Object.assign({}, state);
    newState[action.permissionCategory.id] = action.permissionCategory;
    return newState;
  }
  default: {
    return state;
  }
}
