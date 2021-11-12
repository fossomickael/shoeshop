const cartReducer = (state, action) => {
    if (state === undefined) {
        return [];
      }

    if (action.type === 'DELETE_FROM_CART') {
        return state.filter( item =>  item.id !== action.payload);
    }

    if (action.type === 'ADD_TO_CART') {
        const item = state.find( item =>  item.id === action.payload.id);
        if (item  === undefined) {
            return [...state, {id:action.payload.id, quantity:action.payload.quantity}];
        } 
        return state.map(item => {
            if (item.id === action.payload.id)
            return {
                 ...item,
                quantity: action.payload.quantity + item.quantity
            }
            return item;
        })
    }
    return state;
};
 
 export default cartReducer;