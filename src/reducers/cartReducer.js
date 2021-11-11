const cartReducer = (cart={}, action) => {
    if (action.type === 'GET_DISCOUNT') {
        return action.payload;
    }
    return {};
 };
 
 export default cartReducer;