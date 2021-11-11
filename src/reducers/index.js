import {combineReducers} from 'redux';
import selectedShoeReducer from './selectedShoeReducer';
import shoesReducer from './shoesReducer';
import itemsReducer from './itemsReducer';
import discountReducer from './discountReducer';
import cartReducer from './cartReducer';

export default combineReducers( {
    shoes: shoesReducer,
    selectedShoe: selectedShoeReducer,
    items: itemsReducer,
    discount: discountReducer,
    cart: cartReducer
});