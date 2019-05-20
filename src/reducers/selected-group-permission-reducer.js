import constants from "./../constants";
const { c } = constants;

export default (state = {}, action) => {
  switch (action.type) {
    case c.SELECT_GROUP_PERMISSION:
      return action.groupPermissionId;
    default:
      return state;
  }
};
