import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  let newState;
  const {
    id,
    char_value,
    custom_type_id,
    default_value,
    description,
    num_value
  } = action;

  switch (action.type) {
  case c.ADD_CUSTOM_VALUE: {
    newState = Object.assign({}, state, {
      [id]: {
        char_value: char_value,
        custom_type_id: custom_type_id,
        default_value: default_value,
        description: description,
        num_value: num_value
      }
    });
    return newState;
  }
  case c.EDIT_CUSTOM_VALUE: {
    const newCustomValue = Object.assign(
      {},
      state[id],
      { char_value },
      { custom_type_id },
      { default_value },
      { description },
      { num_value }
    );
    newState = Object.assign({}, state, {
      [id]: newCustomValue
    });
    return newState;
  }
  case c.DELETE_CUSTOM_VALUE: {
    newState = Object.assign({}, state);
    delete newState[action.customValue.id];
    return newState;
  }
  case c.RECEIVE_CUSTOM_VALUE: {
    newState = Object.assign({}, state);
    newState[action.customValue.id] = action.customValue;
    return newState;
  }
  case c.RECEIVE_DELETED_CUSTOM_VALUE: {
    newState = Object.assign({}, state);
    delete newState[action.customValueId];
    return newState;
  }
  default: {
    return state;
  }
  }
};

