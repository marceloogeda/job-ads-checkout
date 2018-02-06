import * as types from './../constants/ActionTypes';

export const addItem = item => ({
  type: types.ADD_ITEM,
  item: Object.assign({}, item, { key: new Date().getTime() })
});

export const removeItem = key => ({
  type: types.REMOVE_ITEM,
  key
});
