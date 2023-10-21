import { UPDATE_COUNTER } from "../constants";

const initialState = {
  counter: 0,
};

function globalReducers(state = initialState, action) {
  console.log("action  --->", action);

  switch (action.type) {
    case UPDATE_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
}

export default globalReducers;
