import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import Products from "./screens/Products";
import Details from "./screens/Details";
import Cart from "./screens/Cart";

import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

export function registerComponent() {
  Navigation.registerComponentWithRedux(
    "Products",
    () => Products,
    Provider,
    store
  );
  Navigation.registerComponent("Details", () => Details);
  Navigation.registerComponent("Cart", () => Cart);
}
