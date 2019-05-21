import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_CLIENT:
    return action.clientId;
  default:
    return state;
  }
};
