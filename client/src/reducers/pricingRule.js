import * as types from './../constants/ActionTypes';

const initialState = {
  isFetching: false,
  payload: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PRICING_RULES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.FETCH_PRICING_RULES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        payload: action.pricingRule
      });
    case types.FETCH_PRICING_RULES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    default:
      return state;
  }
};
