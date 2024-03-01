import { Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { useContext } from "react";
import { AuthButton } from "../../features/account/components/account.styles";
import { Button } from "react-native-paper";
import { SafeArea } from "../../components/utility/safe-area.component";
import { SettingsScreen } from "../../features/settings/screen/setting.screen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

// const Settings = () => {
//   const { onLogout } = useContext(AuthenticationContext);
//   return (
//     <SafeArea>
//       <Text>Settings</Text>
//       <AuthButton onPress={() => onLogout()}>LogOut</AuthButton>
//     </SafeArea>
//   );
// };

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    activeTintColor: "tomato",
    inactiveTintColor: "gray",
    headerShown: false,
  };
};

export const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={createScreenOptions} tabBarOptions={{}}>
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
