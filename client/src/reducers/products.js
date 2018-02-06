import * as types from './../constants/ActionTypes';

const initialState = {
  isFetching: false,
  payload: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.FETCH_PRODUCTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        payload: action.products
      });
    case types.FETCH_PRODUCTS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    default:
      return state;
  }
};
