export const selectShoe = (shoe) => {
    return {
      type: 'SHOE_SELECTED',
      payload: shoe
    };
};