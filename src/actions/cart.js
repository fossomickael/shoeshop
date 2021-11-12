import { ADD_TO_CART, DELETE_FROM_CART} from "./types";


export const addToCart = (productId, quantity) =>  {
    return {
        type: ADD_TO_CART,
        payload: {id: productId, quantity:quantity}
      };
};

export const deleteFromCart = (productId) =>  {
  return {
      type: DELETE_FROM_CART,
      payload: productId
    };
};