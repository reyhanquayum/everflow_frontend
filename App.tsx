const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Login from "./screens/Login";
import CreateAccount from "./screens/CreateAccount";
import ForgotPassword from "./screens/ForgotPassword";
import ForgotPassword1 from "./screens/ForgotPassword1";
import CreateAccount1 from "./screens/CreateAccount1";
import DeviceStatus from "./screens/DeviceStatus";
import MyDevices from "./components/MyDevices";
import PairNewDevice from "./screens/PairNewDevice";
import ShowerControls from "./components/ShowerControls";
import Menu from "./components/Menu";
import Settings from "./screens/Settings";
import EditInformation from "./screens/EditInformation";
import ContactUs from "./screens/ContactUs";
import Image1 from "./components/Image1";
import Format24Hour from "./components/Format24Hour";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateAccount"
              component={CreateAccount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword1"
              component={ForgotPassword1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateAccount1"
              component={CreateAccount1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DeviceStatus"
              component={DeviceStatus}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PairNewDevice"
              component={PairNewDevice}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditInformation"
              component={EditInformation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ContactUs"
              component={ContactUs}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
