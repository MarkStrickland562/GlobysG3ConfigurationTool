import constants from "./../constants";
const { c } = constants;

export default (state = {}, action) => {
  switch (action.type) {
    case c.SELECT_GROUP:
      return action.groupId;
    default:
      return state;
  }
};
