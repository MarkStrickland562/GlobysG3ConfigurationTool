import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  let newState;
  const { id, custom_type_id, custom_value_id, product_id } = action;

  switch (action.type) {
  case c.ADD_PRODUCT_CUSTOM_VALUE: {
    newState = Object.assign({}, state, {
      [id]: {
        custom_type_id: custom_type_id,
        custom_value_id: custom_value_id,
        product_id: product_id
      }
    });
    return newState;
  }
  case c.EDIT_PRODUCT_CUSTOM_VALUE: {
    const newProductCustomValue = Object.assign(
      {},
      state[id],
      { custom_type_id },
      { custom_value_id },
      { product_id }
    );
    newState = Object.assign({}, state, {
      [id]: newProductCustomValue
    });
    return newState;
  }
  case c.DELETE_PRODUCT_CUSTOM_VALUE: {
    newState = Object.assign({}, state);
    delete newState[action.productCustomValue.id];
    return newState;
  }
  case c.RECEIVE_PRODUCT_CUSTOM_VALUE: {
    newState = Object.assign({}, state);
    newState[action.productCustomValue.id] = action.productCustomValue;
    return newState;
  }
  case c.RECEIVE_DELETED_PRODUCT_CUSTOM_VALUE: {
    newState = Object.assign({}, state);
    delete newState[action.productCustomValueId];
    return newState;
  }
  default: {
    return state;
  }
  }
};

