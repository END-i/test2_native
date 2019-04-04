import { Navigation } from 'react-native-navigation'
import { registerComponent } from './src/registerComponent.js'

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
            id: "AppRoot",
            children: [{
                component: {
                  id: 'Products',
                  name: 'Products',
                },
              }],
          },
        },
      },
    },
  })
})
