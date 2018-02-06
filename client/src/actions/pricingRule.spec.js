import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetch from 'jest-fetch-mock';

import * as types from './../constants/ActionTypes';
import fetchPricingRuleIfNeeded from './pricingRule';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('should create an action to fetch pricing rules', () => {
    const expectedActions = [
      { type: types.FETCH_PRICING_RULES_REQUEST },
      { type: types.FETCH_PRICING_RULES_SUCCESS, pricingRule: [] }
    ];

    const store = mockStore({ pricingRule: [] });

    return store.dispatch(fetchPricingRuleIfNeeded()).then(() => {
      store.getActions().map((action, index) => {
        expect(action.type).toEqual(expectedActions[index].type);
      });
    });
  });
});
