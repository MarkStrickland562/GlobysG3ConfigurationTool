import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_PERMISSION:
    return action.permissionId;
  default:
    return state;
  }
};
