import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_CLIENT_CUSTOM_VALUE:
    return action.clientCustomValueId;
  default:
    return state;
  }
};
