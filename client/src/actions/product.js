import * as types from './../constants/ActionTypes';
import { createApolloFetch } from 'apollo-fetch';

// Constants
import { GRAPHQL_URI } from './../constants/api';

const fetch = createApolloFetch({
  uri: GRAPHQL_URI
});

const request = () => ({
  type: types.FETCH_PRODUCTS_REQUEST
});

const success = products => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  products
});

const failure = () => ({
  type: types.FETCH_PRODUCTS_FAILURE
});

export default function fetchProductsIfNeeded() {
  return dispatch => {
    dispatch(request());

    return fetch({
      query: `{
        products {
          id
          name
          price
      		description
        }
      }`
    })
      .then(response => {
        const { products } = response.data;
        dispatch(success(products));
      })
      .catch(error => {
        // @TODO:
        // Log this error in a error tracking platform

        dispatch(failure());
      });
  };
}
