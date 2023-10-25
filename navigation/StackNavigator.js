import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  Foundation,
} from "@expo/vector-icons";
import DrawerDesign from "../component/Drawer/DrawerDesign";
import { enableScreens } from "react-native-screens";
enableScreens();
import Colors from "../constant/Colors";

import HomeScreen from "../screens/Home/HomeScreen";
import EventsScreen from "../screens/Home/EventsScreen";
import FAQsScreen from "../screens/Home/FAQsScreen";
import TrendingScreen from "../screens/Home/TrendingScreen";
import PromoteScreen from "../screens/Home/PromoteScreen";

import TrainingHome from "../screens/Training/TrainingHome";

import Commander from "../component/Drawer/CommanderScreen/Commander";
import DeveloperScreen from "../component/Drawer/DeveloperScreen";
import IndevelopmentScreen from "../component/Drawer/IndevelopmentScreen";

const HomeNav = createSharedElementStackNavigator();
const FinalStackNav = createSharedElementStackNavigator();
const IndevelopmentStackNav = createSharedElementStackNavigator();
const TrainingStackNav = createSharedElementStackNavigator();

const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const SpecialButton = (props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => props.onPress()}
        style={styles.customButton}
      >
        <MaterialCommunityIcons
          name="map-search-outline"
          size={40}
          color={Colors.ufoGreen}
        />
      </TouchableOpacity>
    </View>
  );
};

const options = () => ({
  gestureEnabled: false,
  transitionSpec: {
    open: {
      animation: "timing",
      config: { duration: 400 },
    },
    close: {
      animation: "timing",
      config: { duration: 400 },
    },
  },
  cardStyleInterpolation: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
});

function HomeStack() {
  return (
    <HomeNav.Navigator initialRouteName="Home">
      <HomeNav.Screen name="Home" options={options} component={HomeScreen} />
      <HomeNav.Screen
        name="Events"
        options={options}
        sharedElements={(route, otherRoute, showing) => {
          const { item } = route.params;
          return [
            `item.${item.id}.photo`,
            `item.${item.id}.content`,
            `item.cardData`,
          ];
        }}
        component={EventsScreen}
      />
      <HomeNav.Screen
        name="Trending"
        options={options}
        component={TrendingScreen}
      />
      <HomeNav.Screen
        name="FAQS"
        options={options}
        sharedElements={(route, otherRoute, showing) => {
          const { item } = route.params;
          return [
            `itemFAQs.${item.id}.photo`,
            `itemFAQs.${item.id}.content`,
            `itemFAQs.cardData`,
          ];
        }}
        component={FAQsScreen}
      />
      <HomeNav.Screen
        name="Promote"
        options={options}
        component={PromoteScreen}
      />
    </HomeNav.Navigator>
  );
}
function TrainingStack() {
  return (
    <TrainingStackNav.Navigator initialRouteName="Home">
      <TrainingStackNav.Screen
        name="TrainingHome"
        options={options}
        component={TrainingHome}
      />
    </TrainingStackNav.Navigator>
  );
}

function IndevelopmentStack() {
  return (
    <IndevelopmentStackNav.Navigator initialRouteName="Dev">
      <IndevelopmentStackNav.Screen
        name="Dev"
        //  options={options}
        component={IndevelopmentScreen}
      />
    </IndevelopmentStackNav.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tabs.Navigator initialRouteName="HomeTab">
      <Tabs.Screen
        name="HomeTab"
        options={{
          headerShown: false,
          tabBarLabel: "Home",

          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={30} color="black" />
          ),
        }}
        component={HomeStack}
      />
      <Tabs.Screen
        name="TrainingTab"
        options={{
          headerShown: false,
          tabBarLabel: "Training",

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="human-male-board"
              size={30}
              color="black"
            />
          ),
        }}
        component={TrainingStack}
      />
    </Tabs.Navigator>
  );
}
const FinalNavigator = () => {
  return (
    <FinalStackNav.Navigator>
      <FinalStackNav.Screen
        name="HomeTabnavigator"
        options={{ headerShown: false }}
        component={TabNavigator}
      />
    </FinalStackNav.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={DrawerDesign}
      screenOptions={{
        labelStyle: { fontSize: 17, fontWeight: "bold" },
        drawerStyle: {
          backgroundColor: Colors.light,
          width: 240,
        },
      }}
      edgeWidth={100}
    >
      <Drawer.Screen
        name="Feed"
        options={{
          headerShown: false,
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => null,
        }}
        component={FinalNavigator}
      />
      <Drawer.Screen
        name="Commander"
        options={{ headerShown: false, drawerLabel: "President Duterte" }}
        component={Commander}
      />
      <Drawer.Screen
        name="Developer"
        options={{ headerShown: false, drawerLabel: "App Developer" }}
        component={DeveloperScreen}
      />
      <Drawer.Screen
        name="Indevelopment"
        options={{ headerShown: false, drawerLabel: "Indevelopment" }}
        component={IndevelopmentStack}
      />
    </Drawer.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({
  customButton: {
    backgroundColor: Colors.orange,
    height: 70,
    width: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    bottom: 30,
  },
});
