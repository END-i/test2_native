import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import ProductsScreen from './screens/ProductsScreen'
import DetailsScreen from './screens/DetailsScreen'
import CartScreen from './screens/CartScreen'
import SideMenuScreen from './screens/SideMenuScreen'

import store from './store'

export function registerComponent() {
  Navigation.registerComponentWithRedux(
    'Products',
    () => ProductsScreen,
    Provider,
    store
  )
  Navigation.registerComponent('Details', () => DetailsScreen)
  Navigation.registerComponent('Cart', () => CartScreen)
  Navigation.registerComponent('SideMenu', () => SideMenuScreen)
}
