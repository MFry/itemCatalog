import { fetchItem } from './Api';

export const getCategories = () => ({
  type: 'GET_CATEGORIES',
  payload: null,
});

export const getItem = (id = 1) => ({
  type: 'GET_ITEM',
  payload: fetchItem(id),
});
