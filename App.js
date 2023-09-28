import "expo-dev-client";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import AuthContextProvider from "./context/AuthContext";
// import TaskContextProvider from "./context/TaskContext";
import StackNavigator from "./navigation/StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
    <GestureHandlerRootView style={styles.container}>
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
