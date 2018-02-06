import * as types from './../constants/ActionTypes';
import { createApolloFetch } from 'apollo-fetch';

// Constants
import { GRAPHQL_URI } from './../constants/api';

const fetch = createApolloFetch({
  uri: GRAPHQL_URI
});

const request = () => ({
  type: types.FETCH_PRICING_RULES_REQUEST
});

const success = pricingRule => ({
  type: types.FETCH_PRICING_RULES_SUCCESS,
  pricingRule
});

const failure = () => ({
  type: types.FETCH_PRICING_RULES_FAILURE
});

export default function fetchPricingRuleIfNeeded() {
  return dispatch => {
    const params = window.location.search.split('=');
    dispatch(request());

    return fetch({
      query: `query($customerId: ID) {
        pricingRule(customerId: $customerId) {
          id
          customerId
          discounts {
            productId
            repeatEach
            value
            unit
          }
        }
      }`,
      variables: { customerId: params[1] }
    })
      .then(response => {
        const payload = response.data.pricingRule
          ? response.data.pricingRule
          : {};

        dispatch(success(payload));
      })
      .catch(error => {
        // @TODO:
        // Log this error in a error tracking platform

        dispatch(failure());
      });
  };
}
