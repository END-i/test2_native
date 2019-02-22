import { Navigation } from "react-native-navigation";
import { registerComponent } from "./src/registerComponent";

registerComponent();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: "AppStack",
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
