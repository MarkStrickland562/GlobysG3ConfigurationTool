import constants from "./../constants";
const { c } = constants;

export default (state = {}, action) => {
  switch (action.type) {
    case c.SELECT_PRODUCTUSERTYPEPERMISSION:
      return action.productUserTypePermissionId;
    default:
      return state;
  }
};
