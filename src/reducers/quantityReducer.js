const quantityReducer = (quantity=0, action) => {
    if (action.type === 'CHANGE_QUANTITY') {
        return action.payload;
    }
    return quantity;
 };
 
 export default quantityReducer;