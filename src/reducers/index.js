import clientsReducer from "./clients-reducer";

const rootReducer = combineReducers({
  masterclients: clientsReducer,
  selectedClient: selectedClientReducer
});

export default rootReducer;
