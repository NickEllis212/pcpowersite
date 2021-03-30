
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import { basketReducer } from './reducers/basketReducers';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';

const initialState = {
    basket:{
        basketItems: localStorage.getItem('basketItems')
        ? JSON.parse(localStorage.getItem('basketItems'))
        :[],
    }
};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    basket: basketReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;