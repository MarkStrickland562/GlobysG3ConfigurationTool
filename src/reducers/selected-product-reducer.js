import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_PRODUCT:
    return action.productId;
  default:
    return state;
  }
};
