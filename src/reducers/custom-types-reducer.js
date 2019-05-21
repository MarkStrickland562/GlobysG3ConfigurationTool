import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  let newState;
  const {
    id,
    custom_input_type,
    custom_type_category_id,
    custom_type_description,
    custom_type_name
  } = action;

  switch (action.type) {
  case c.ADD_CUSTOM_TYPE: {
    newState = Object.assign({}, state, {
      [id]: {
        custom_input_type: custom_input_type,
        custom_type_category_id: custom_type_category_id,
        custom_type_description: custom_type_description,
        custom_type_name: custom_type_name
      }
    });
    return newState;
  }
  case c.EDIT_CUSTOM_TYPE: {
    const newCustomType = Object.assign(
      {},
      state[id],
      { custom_input_type },
      { custom_type_category_id },
      { custom_type_description },
      { custom_type_name }
    );
    newState = Object.assign({}, state, {
      [id]: newCustomType
    });
    return newState;
  }
  case c.DELETE_CUSTOM_TYPE: {
    newState = Object.assign({}, state);
    delete newState[action.customType.id];
    return newState;
  }
  case c.RECEIVE_CUSTOM_TYPE: {
    newState = Object.assign({}, state);
    newState[action.customType.id] = action.customType;
    return newState;
  }
  case c.RECEIVE_DELETED_CUSTOM_TYPE: {
    newState = Object.assign({}, state);
    delete newState[action.customTypeId];
    return newState;
  }
  default: {
    return state;
  }
  }
};

