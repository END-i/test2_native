import { Navigation } from 'react-native-navigation'
import { registerComponent } from './src/registerComponent.js'
//
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Remote debugger'])
//

registerComponent()

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        id: 'sideMenu',
        left: {
          component: {
            id: 'SideMenu',
            name: 'SideMenu',
          },
        },
        center: {
          stack: {
            id: 'AppRoot',
            children: [
              {
                component: {
                  id: 'Details',
                  name: 'Details',
                },
                component: {
                  id: 'Cart',
                  name: 'Cart',
                },
                component: {
                  id: 'Products',
                  name: 'Products',
                },
              },
            ],
          },
        },
      },
    },
  })
})
