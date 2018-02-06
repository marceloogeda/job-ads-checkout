import * as types from './../constants/ActionTypes';

// import type { OrderState } from '../types/orders';
// import type { Action } from '../types';

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      return [...state, action.item];
    case types.REMOVE_ITEM:
      const newState = state.filter(order => order.key !== action.key);

      return [...newState];
    default:
      return state;
  }
};
