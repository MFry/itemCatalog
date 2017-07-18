import '../../css/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import multi from 'redux-multi';
import Navbar from './Navbar';
import Header from './Header';
import Content from './Content';
import { catalog } from './reducers/catalogReducer';
import {
    loadCatalog,
    loadCatalogMiddleware,
} from './actions/loadCatalogAction';

const reducers = combineReducers({ catalog });

const store = createStore(
    reducers,
    applyMiddleware(
        logger,
        thunk,
        promiseMiddleware(),
        multi,
        loadCatalogMiddleware
    )
);

store.dispatch(loadCatalog());

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Navbar />
            <Header />
            <Content />
        </div>
    </Provider>,
    document.getElementById('app')
);
