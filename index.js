import { Navigation } from "react-native-navigation";
import { registerComponent } from './src/registerComponent.js'

registerComponent();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "Products"
            }
          }
        ]
      }
    }
  });
});