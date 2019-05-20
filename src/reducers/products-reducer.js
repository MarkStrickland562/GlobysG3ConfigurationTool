import constants from "./../constants";
const { c } = constants;

export default (state = {}, action) => {};
let newState;
const {
  id,
  client_id,
  display_help_text,
  display_name,
  display_order,
  piv_flg,
  product_code,
  product_name
} = action;

switch (action.type) {
  case c.ADD_PRODUCT: {
    newState = Object.assign({}, state, {
      [id]: {
        client_id: client_id,
        display_help_text: display_help_text,
        display_name: display_name,
        display_order: display_order,
        piv_flg: piv_flg,
        product_code: product_code,
        product_name: product_name
      }
    });
    return newState;
  }
  case c.EDIT_PRODUCT: {
    const newProduct = Object.assign(
      {},
      state[id],
      { client_id },
      { display_help_text },
      { display_name },
      { display_order },
      { piv_flg },
      { product_code },
      { product_name }
    );
    newState = Object.assign({}, state, {
      [id]: newProduct
    });
    return newState;
  }
  case c.DELETE_PRODUCT: {
    newState = Object.assign({}, state);
    delete newState[action.product.id];
    return newState;
  }
  case c.RECEIVE_PRODUCT: {
    newState = Object.assign({}, state);
    newState[action.product.id] = action.product;
    return newState;
  }
  case c.RECEIVE_DELETED_PRODUCT: {
    newState = Object.assign({}, state);
    delete newState[action.productId];
    return newState;
  }
  default: {
    return state;
  }
}
