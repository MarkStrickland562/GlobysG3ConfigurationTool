import constants from "./../constants";
const { c } = constants;

export default (state = {}, action) => {};
let newState;
const {
  id,
  custom_input_type,
  custom_type_category_id,
  custom_type_description,
  custom_type_name
} = action;

switch (action.type) {
  case c.RECEIVE_CUSTOM_TYPE: {
    newState = Object.assign({}, state);
    newState[action.customType.id] = action.customType;
    return newState;
  }
  default: {
    return state;
  }
}
