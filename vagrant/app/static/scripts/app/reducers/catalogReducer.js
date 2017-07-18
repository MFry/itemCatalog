export const ITEMS = 'items';
export const CATEGORIES = 'categories';

export const catalog = (state = { items: [], categories: [] }, action) => {
    switch (action.type) {
        case ITEMS:
            return { ...state, items: action.data };
        case CATEGORIES:
            return { ...state, categories: action.data };
        default:
            return state;
    }
};
