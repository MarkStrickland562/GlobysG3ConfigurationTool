import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_GROUP_CUSTOM_VALUE:
    return action.groupCustomValueId;
  default:
    return state;
  }
};
