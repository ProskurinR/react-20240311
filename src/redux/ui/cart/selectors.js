export const selectCartModule = (state) => state.cart;

export const selectCartDishids = (state) =>
  Object.keys(selectCartModule(state));

export const selectDishAmount = (state, dishId) =>
  selectCartModule(state)[dishId] || 0;
