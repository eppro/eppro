import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

//COMPONENTS//
import reducers from './reducers';
import Routes from './routes';


const createstorewithmiddleware = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore)

ReactDOM.render(
    <Provider store={createstorewithmiddleware(reducers)}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
    ,document.getElementById('root')
);