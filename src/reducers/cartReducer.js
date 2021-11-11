const cartReducer = (cart={}, action) => {
    if (action.type === 'ADD_TO_CART') {
        return action.payload;
    }
    return {};
};
 
 export default cartReducer;