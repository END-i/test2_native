export function products(state = [1, 2, 3, 4], action) {
  switch (action.type) {
    case "PRODUCTS":
      return action.products;
    default:
      return state;
  }
}
