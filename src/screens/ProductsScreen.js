import React, { useEffect } from "react";
import { Navigation } from "react-native-navigation";

import TopBarNavigation from "../containers/TopBarNavigation";
import AllProducts from "../containers/AllProducts/index";

const ProductsScreen = props => {
  const { componentId } = props;

  useEffect(() => {
    const navigationButtonEventListener = Navigation.events().registerNavigationButtonPressedListener(
      ({ buttonId }) => {
        openSideBar(buttonId);
      }
    );
    Navigation.mergeOptions(componentId, TopBarNavigation("Products"));
  });

  const openSideBar = id => {
    if (id === "sideMenuButton") {
      Navigation.mergeOptions(componentId, {
        sideMenu: {
          left: {
            visible: true
          }
        }
      });
    }
  };

  return <AllProducts {...props} />;
};

export default ProductsScreen;
