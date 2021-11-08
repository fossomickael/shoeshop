import { SHOE_SELECTED, CHANGE_QUANTITY } from "./types";

export const selectShoe = (shoe) => {
    return {
      type: SHOE_SELECTED,
      payload: shoe
    };
};

export const changeQuantity = (newquantity) => {
    return {
        type: CHANGE_QUANTITY,
        payload: Math.max(0,newquantity)
    };
}