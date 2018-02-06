import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetch from 'jest-fetch-mock';

import * as types from './../constants/ActionTypes';
import fetchProductsIfNeeded from './product';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('should create an action to fetch products', () => {
    const expectedActions = [
      { type: types.FETCH_PRODUCTS_REQUEST },
      { type: types.FETCH_PRODUCTS_SUCCESS, products: [] }
    ];

    const store = mockStore({ products: [] });

    return store.dispatch(fetchProductsIfNeeded()).then(() => {
      store.getActions().map((action, index) => {
        expect(action.type).toEqual(expectedActions[index].type);
      });
    });
  });
});
