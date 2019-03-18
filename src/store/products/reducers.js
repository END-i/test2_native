const PRODUCTS_LIST = "PRODUCTS_LIST";

export function products(state = null, action) {
    switch (action.type) {
        case PRODUCTS_LIST:
            return action.getProductsList;
        default:
            return state;
    }
}
