import "expo-dev-client";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import AuthContextProvider from "./context/AuthContext";
import TaskContextProvider from "./context/TaskContext";
import StackNavigator from "./navigation/StackNavigator";
import { useCallback } from "react";
import { ChosenFontStyle } from "./assets/fonts/StyleFont";

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [isLoaded] = useFonts(ChosenFontStyle);

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync(); //hide the splashscreen
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
    <GestureHandlerRootView style={styles.container} onLayout={handleOnLayout}>
      {/* <AuthContextProvider> */}
        <TaskContextProvider>
          <StackNavigator />
        </TaskContextProvider>
      {/* </AuthContextProvider> */}
    </GestureHandlerRootView>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
