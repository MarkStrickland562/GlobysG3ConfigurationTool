import constants from "./../constants";
const { c } = constants;

export default (state = {}, action) => {
  switch (action.type) {
    case c.SELECT_CLIENT_PERMISSION:
      return action.clientPermissionId;
    default:
      return state;
  }
};
