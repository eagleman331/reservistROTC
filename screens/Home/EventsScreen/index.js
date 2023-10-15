import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SharedElement } from "react-navigation-shared-element";

const { width, height } = Dimensions.get("window");

const index = ({ navigation, route }) => {
  const { item } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      {/* <Image
        source={require("../../../assets/TestAssets/militaryBackground.png")}
        style={styles.imageBack}
      /> */}
      <SharedElement
        id={`item.${item.id}.photo`}
        style={[StyleSheet.absoluteFillObject]}
      >
        <View style={[{ height: height, width: width }]}>
          <Image
            source={{ uri: item.photo }}
            style={[StyleSheet.absoluteFillObject, { resizeMode: "cover" }]}
          />
        </View>
      </SharedElement>
      <View
        style={{
          backgroundColor: "red",
          width,
          height: height * 0.6,
          position: "absolute",
          top: 300,
          borderRadius: 35,
        }}
      >
        <View style={{ marginTop: 15, marginLeft: 15 }}>
          <Text style={{ color: "white" }}>Events</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  imageBack: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: width,
    height: height,
  },
});
