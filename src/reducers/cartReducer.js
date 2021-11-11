const cartReducer = (state, action) => {
    if (state === undefined) {
        return {};
      }
    if (action.type === 'ADD_TO_CART') {
        return action.payload;
    }
    return state;
};
 
 export default cartReducer;