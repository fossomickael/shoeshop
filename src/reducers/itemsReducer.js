
const itemsReducer = (state, action) => {
    if (state === undefined) {
        return [];
      }
    if (action.type === 'GET_ITEMS') {
        return action.payload;
    }
    if (action.type === 'GET_ITEM') {
        return  [...state, action.payload];;
    }
    return state;
 };
 
 export default itemsReducer;