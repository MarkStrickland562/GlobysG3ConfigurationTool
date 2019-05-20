import constants from "./../constants";
const { c } = constants;

export default (state = {}, action) => {
  switch (action.type) {
    case c.SELECT_PERMISSION_CATEGORY:
      return action.permissionCategoryId;
    default:
      return state;
  }
};
