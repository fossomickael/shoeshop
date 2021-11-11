import { SHOE_SELECTED } from "./types";

export const selectShoe = (shoe) => {
    return {
      type: SHOE_SELECTED,
      payload: shoe
    };
};

