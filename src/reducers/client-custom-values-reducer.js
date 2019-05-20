import constants from "./../constants";
const { c } = constants;

export default (state = {}, action) => {};
let newState;
const { id, client_id, custom_type_id, custom_value_id } = action;

switch (action.type) {
  case c.ADD_CLIENT_CUSTOM_VALUES: {
    newState = Object.assign({}, state, {
      [id]: {
        client_id: client_id,
        custom_type_id: custom_type_id,
        custom_value_id: custom_value_id
      }
    });
    return newState;
  }
  case c.EDIT_CLIENT_CUSTOM_VALUES: {
    const newClientCustomValue = Object.assign(
      {},
      state[id],
      { client_id },
      { custom_type_id },
      { custom_value_id }
    );
    newState = Object.assign({}, state, {
      [id]: newClientCustomValue
    });
    return newState;
  }
  case c.DELETE_CLIENT_CUSTOM_VALUES: {
    newState = Object.assign({}, state);
    delete newState[action.clientCustomValue.id];
    return newState;
  }
  case c.RECEIVE_CLIENT_CUSTOM_VALUES: {
    newState = Object.assign({}, state);
    newState[action.clientCustomValue.id] = action.clientCustomValueId;
    return newState;
  }
  case c.RECEIVE_DELETED_CLIENT_CUSTOM_VALUES: {
    newState = Object.assign({}, state);
    delete newState[action.clientCustomValueId];
    return newState;
  }
  default: {
    return state;
  }
}
