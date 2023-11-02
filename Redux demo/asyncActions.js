const redux = require("redux");

const createStore = redux.createStore;

const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_ERROR = "FETCH_USER_ERROR";

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

const fetchUserError = (error) => {
  return {
    type: FETCH_USER_ERROR,
    payload: error,
  };
};

const fetchUsers = () => {
  // thunk function which has access to dispatch and getstate
  return function (dispatch, getstate) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // response.data is the users
        const users = response.data.map((user) => user.id);
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        // error.message is the error message

        dispatch(fetchUserError(error.message));
      });
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };

    case FETCH_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
console.log("Initital State:  ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//dispatch taking thunk function instead of action plain object
store.dispatch(fetchUsers());
