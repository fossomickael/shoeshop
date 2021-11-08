const priceReducer = (price=250, action) => {
    if (action.type === 'GET_PRICE') {
        return action.payload;
    }
    return price;
 };
 
 export default priceReducer;