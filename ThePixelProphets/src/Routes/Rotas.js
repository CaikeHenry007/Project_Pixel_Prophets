import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import RotasDrawer from "./Drawer.routes";

export default function AllRoutes() {
  return (
    <NavigationContainer>
        <RotasDrawer/>
    </NavigationContainer>
  );
}
