import * as types from './../constants/ActionTypes';
import { addItem, removeItem } from './order';

describe('actions', () => {
  it('should create an action to add an order', () => {
    const item = {
      id: 'classic',
      price: 100,
      name: 'Classic Ad',
      key: new Date().getTime()
    };

    const expectedAction = {
      type: types.ADD_ITEM,
      item
    };

    expect(addItem(item)).toEqual(expectedAction);
  });

  it('should create an action to remove an order', () => {
    const key = new Date().getTime();

    const expectedAction = {
      type: types.REMOVE_ITEM,
      key
    };

    expect(removeItem(key)).toEqual(expectedAction);
  });
});
