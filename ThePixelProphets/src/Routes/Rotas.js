import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import RotasDrawer from "./Drawer.routes";
import RotasTabs from "./BottomTabs.routes";
import StackRoutes from "./Stack.routes";

export default function AllRoutes() {
  return (
    <NavigationContainer>
        <StackRoutes/>
    </NavigationContainer>
  );
}
