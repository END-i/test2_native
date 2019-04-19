import React, { useEffect } from "react";
import { Navigation } from "react-native-navigation";

import TopBarNavigation from "../containers/TopBarNavigation";
import Description from "../containers/Description";

const DetailsScreen = props => {
  const { componentId } = props;

  useEffect(() => {
    Navigation.mergeOptions(componentId, TopBarNavigation("Details"));

    const navigationButtonEventListener = Navigation.events().registerNavigationButtonPressedListener(
      ({ buttonId }) => {
        openSideBar(buttonId);
      }
    );
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

  return <Description {...props} />;
};

export default DetailsScreen;
