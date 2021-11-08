import {combineReducers} from 'redux';
import selectedShoeReducer from './selectedShoeReducer';
import shoesReducer from './shoesReducer'

export default combineReducers( {
    shoes: shoesReducer,
    selectedShoe: selectedShoeReducer
});