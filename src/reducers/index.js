import {combineReducers} from 'redux';
import selectedShoeReducer from './selectedShoeReducer';
import shoesReducer from './shoesReducer';
import quantityReducer from './quantityReducer';

export default combineReducers( {
    shoes: shoesReducer,
    selectedShoe: selectedShoeReducer,
    quantity: quantityReducer
});