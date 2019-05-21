import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  let newState;
  const {
    id,
    custom_type_id,
    custom_value_id,
    group_id,
    intersect_custom_value_id
  } = action;

  switch (action.type) {
  case c.ADD_GROUP_CUSTOM_VALUE: {
    newState = Object.assign({}, state, {
      [id]: {
        custom_type_id: custom_type_id,
        custom_value_id: custom_value_id,
        group_id: group_id,
        intersect_custom_value_id: intersect_custom_value_id
      }
    });
    return newState;
  }
  case c.EDIT_GROUP_CUSTOM_VALUE: {
    const newGroupCustomValue = Object.assign(
      {},
      state[id],
      { custom_type_id },
      { custom_value_id },
      { group_id },
      { intersect_custom_value_id }
    );
    newState = Object.assign({}, state, {
      [id]: newGroupCustomValue
    });
    return newState;
  }
  case c.DELETE_GROUP_CUSTOM_VALUE: {
    newState = Object.assign({}, state);
    delete newState[action.groupCustomValue.id];
    return newState;
  }
  case c.RECEIVE_GROUP_CUSTOM_VALUE: {
    newState = Object.assign({}, state);
    newState[action.groupCustomValue.id] = action.groupCustomValue;
    return newState;
  }
  case c.RECEIVE_DELETED_GROUP_CUSTOM_VALUE: {
    newState = Object.assign({}, state);
    delete newState[action.groupCustomValueId];
    return newState;
  }
  default: {
    return state;
  }
  }
};
