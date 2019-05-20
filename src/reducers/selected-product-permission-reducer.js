import constants from "./../constants";
const { c } = constants;

export default (state = {}, action) => {
  switch (action.type) {
    case c.SELECT_PRODUCTPERMISSION:
      return action.productPermissionId;
    default:
      return state;
  }
};
