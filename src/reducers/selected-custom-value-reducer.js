import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_CUSTOM_VALUE:
    return action.customValueId;
  default:
    return state;
  }
};
