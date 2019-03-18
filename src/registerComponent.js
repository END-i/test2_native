import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import ProductsScreen from "./screens/ProductsScreen";
import DetailsScreen from "./screens/DetailsScreen";
import CartScreen from "./screens/CartScreen";
import store from './store/index'


export function registerComponent() {
  Navigation.registerComponentWithRedux(
    "Products",
    () => ProductsScreen,
    Provider,
    store
  );
  Navigation.registerComponent("Details", () => DetailsScreen);
  Navigation.registerComponent("Cart", () => CartScreen);
}
