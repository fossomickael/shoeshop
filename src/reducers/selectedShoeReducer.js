const selectedShoeReducer = (selectedShoe="product-1", action) => {
    if (action.type === 'SHOE_SELECTED') {
        return action.payload;
    }
 
    return selectedShoe;
 };
 
 export default selectedShoeReducer;