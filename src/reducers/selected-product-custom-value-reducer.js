import constants from "./../constants";
const { c } = constants;

export default (state = {}, action) => {
  switch (action.type) {
    case c.SELECT_PRODUCT_CUSTOM_VALUE:
      return action.productCustomValueId;
    default:
      return state;
  }
};
