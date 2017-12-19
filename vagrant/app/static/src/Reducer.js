export const ITEMS = 'items';
export const CATEGORIES = 'categories';


export const catalog = (state = { items: [], categories: [] }, action) => {
  switch (action.type) {
    case `${ITEMS}_FULFILLED`:
      return { ...state, items: action.data };
    case `${CATEGORIES}_FULFILLED`:
      return { ...state, items: action.data };
    default:
      return state;
  }
};
export default catalog;
