import constants from "./../constants";
const { c } = constants;

export default (state = {}, action) => {
  switch (action.type) {
    case c.SELECT_CUSTOM_TYPE:
      return action.customTypeId;
    default:
      return state;
  }
};
