import { ADD_TO_CART } from "./types";


export const addToCart = (id, quantity) =>  {
    return {
        type: ADD_TO_CART,
        payload: {}
      };
};