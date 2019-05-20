import constants from "./../constants";
const { c } = constants;

export default (state = {}, action) => {};
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
  case c.RECEIVE_CUSTOM_VALUE: {
    newState = Object.assign({}, state);
    newState[action.customValue.id] = action.customValue;
    return newState;
  }
  default: {
    return state;
  }
}
