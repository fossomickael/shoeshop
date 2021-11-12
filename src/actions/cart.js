import { ADD_TO_CART } from "./types";


export const addToCart = (productId, quantity) =>  {
    return {
        type: ADD_TO_CART,
        payload: {id: productId, quantity:quantity}
      };
};