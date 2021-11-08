const discountReducer = (discount=0.5, action) => {
    if (action.type === 'GET_DISCOUNT') {
        return action.payload;
    }
    return discount;
 };
 
 export default discountReducer;