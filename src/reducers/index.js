import {combineReducers} from 'redux';
import selectedShoeReducer from './selectedShoeReducer';
import shoesReducer from './shoesReducer';
import priceReducer from './priceReducer';
import discountReducer from './discountReducer';

export default combineReducers( {
    shoes: shoesReducer,
    selectedShoe: selectedShoeReducer,
    price: priceReducer,
    discount: discountReducer
});