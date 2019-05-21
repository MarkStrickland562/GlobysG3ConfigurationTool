import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  let newState;
  const { id, client_id, group_name, group_priority, viewable_flg } = action;

  switch (action.type) {
  case c.ADD_GROUP: {
    newState = Object.assign({}, state, {
      [id]: {
        client_id: client_id,
        group_name: group_name,
        group_priority: group_priority,
        viewable_flg: viewable_flg
      }
    });
    return newState;
  }
  case c.EDIT_GROUP: {
    const newGroup = Object.assign(
      {},
      state[id],
      { client_id },
      { group_name },
      { group_priority },
      { viewable_flg }
    );
    newState = Object.assign({}, state, {
      [id]: newGroup
    });
    return newState;
  }
  case c.DELETE_GROUP: {
    newState = Object.assign({}, state);
    delete newState[action.group.id];
    return newState;
  }
  case c.RECEIVE_GROUP: {
    newState = Object.assign({}, state);
    newState[action.group.id] = action.group;
    return newState;
  }
  case c.RECEIVE_DELETED_GROUP: {
    newState = Object.assign({}, state);
    delete newState[action.groupId];
    return newState;
  }
  default: {
    return state;
  }
  }
};
