import {combineReducers} from 'redux';
import selectedShoeReducer from './selectedShoeReducer';
import shoesReducer from './shoesReducer';
import quantityReducer from './quantityReducer';
import priceReducer from './priceReducer';
import discountReducer from './discountReducer';

export default combineReducers( {
    shoes: shoesReducer,
    selectedShoe: selectedShoeReducer,
    quantity: quantityReducer,
    price: priceReducer,
    discount: discountReducer
});