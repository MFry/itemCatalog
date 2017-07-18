import axios from 'axios';
import { ITEMS, CATEGORIES } from '../reducers/catalogReducer';

export const loadCatalog = () => {
    return [loadCategories(), loadItems()];
};

const loadItems = () => ({
    type: ITEMS,
    payload: axios.get('/j/items'),
});

const loadCategories = () => ({
    type: CATEGORIES,
    payload: axios.get('/j/categories'),
});

export const loadCatalogMiddleware = store => next => action => {
    switch (action.type) {
        case ITEMS + '_FULFILLED':
            next({ type: ITEMS, data: action.payload.data });
            break;
        case CATEGORIES + '_FULFILLED':
            next({ type: CATEGORIES, data: action.payload.data });
            break;
    }
};
