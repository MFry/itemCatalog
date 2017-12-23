import { fetchItem } from './Api';

export const getCategories = () => ({
  type: 'GET_CATEGORIES',
  payload: null,
});

export const getItem = (id = 1) => ({
  type: 'GET_ITEM',
  payload: fetchItem(id).then((response) => {
    if (response.ok) {
      console.log(response);
      response.json().then((data) => {
        console.log(data);
        return data;
      });
    } else {
      throw new Error(`Network response error ${response}`);
    }
  }).catch((err) => { console.log(`Fetch error: ${err}`); }),
});
