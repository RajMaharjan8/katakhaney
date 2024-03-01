import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { CameraScreen } from "../../features/settings/screen/camera.screen";
// import { Settings } from "react-native";
import { FavouritesScreen } from "../../features/settings/screen/favourites.screen";
import { SettingsScreen } from "../../features/settings/screen/setting.screen";

const SettingStack = createStackNavigator();

export const SettingsNavigator = () => {
  <SettingStack.Navigator
    headerMode="screen"
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolator.forHorizontalIOS,
    }}
  >
    <Settings
      options={{ header: () => null }}
      name="Settings"
      component={SettingsScreen}
    />
    <SettingStack.Screen name="Favourites" component={FavouritesScreen} />
    <SettingStack.Screen name="Camera" component={CameraScreen} />

  </SettingStack.Navigator>;
};
