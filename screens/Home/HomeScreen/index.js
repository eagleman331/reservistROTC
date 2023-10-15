import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { PushUpData } from "../../../testFiles/DataSlides/PftSlidesFAQs/Push-UpFAQs";
import { TouchableOpacity } from "react-native";
import { SharedElement } from "react-navigation-shared-element";

import { tutorialSpec } from "../../../theme";
const { width, height } = Dimensions.get("window");
const { ITEM_HEIGHT, ITEM_WIDTH, RADIUS, SPACING, FULL_SIZE } = tutorialSpec;

const index = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const Onclick_Activity = (item) => {
    navigation.navigate("Events", {item});
  };
  const Onclick_Trends = () => {
    navigation.navigate("Trending");
  };
  const Onclick_FAQS = () => {
    navigation.navigate("FAQS");
  };
  const Onclick_Promote = () => {
    navigation.navigate("Promote");
  };

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Image
        source={require("../../../assets/Drawer/PresidentMarcos.png")}
        style={styles.imageBack}
      />
      <ScrollView>
        <View>
          <View style={{ marginTop: 50, marginLeft: 50 }}>
            <Text style={{ color: "white", fontSize: 40 }}>Home</Text>
          </View>

          <View style={[styles.eventSlides, ]}>
            <View >
              <Text style={{ color: "white" }}>Events</Text>
            </View>
            <View>
              <FlatList
                data={PushUpData}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal
                bounces={false}
                decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
                renderToHardwareTextureAndroid
                contentContainerStyle={{ alignItems: "center" }}
                // snapToInterval={ITEM_SIZE}
                snapToAlignment="start"
                // onScroll={Animated.event(
                //   [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                //   {
                //     useNativeDriver: false,
                //   }
                // )}
                // onViewableItemsChanged={viewableItemsChanged}
                // ref={slidesRef}
                renderItem={({ item, index }) => {
                  let reqSentence = item.requirements;

                  // const scale = scrollX.interpolate({
                  //   inputRange,
                  //   outputRange: [1, 1.1, 1],
                  // });
                  return (
                    <TouchableOpacity
                      onPress={Onclick_Activity(item)}
                      style={styles.itemContainer}
                    >
                      {/* <View
                        style={[
                          StyleSheet.absoluteFillObject,
                          {
                            backgroundColor: "red",
                            borderRadius: 5,
                          },
                        ]}
                      > </View> */}
                        <SharedElement
                          id={`item.${item.id}.photo`}
                          style={[StyleSheet.absoluteFillObject]}
                        >
                          <View
                            style={[
                              StyleSheet.absoluteFillObject,
                              { overflow: "hidden", borderRadius: RADIUS },
                            ]}
                          >
                            <Animated.Image
                              source={{ uri: item.photo }}
                              style={[
                                StyleSheet.absoluteFillObject,
                                { resizeMode: "cover",
                                // transform: [{ scale }] 
                              },
                              ]}
                            />
                          </View>
                        </SharedElement>
                     
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>

          <View style={[styles.ROTCSlides, { marginBottom: 10 }]}>
            <View style={{ marginBottom: 10 }}>
              <Text style={{ color: "white" }}>Trending</Text>
            </View>
            <View>
              <FlatList
                data={PushUpData}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal
                bounces={false}
                decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
                renderToHardwareTextureAndroid
                contentContainerStyle={{ alignItems: "center" }}
                // snapToInterval={ITEM_SIZE}
                snapToAlignment="start"
                // onScroll={Animated.event(
                //   [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                //   {
                //     useNativeDriver: false,
                //   }
                // )}
                // onViewableItemsChanged={viewableItemsChanged}
                // ref={slidesRef}
                renderItem={({ item, index }) => {
                  let reqSentence = item.requirements;
                  return (
                    <TouchableOpacity onPress={Onclick_Trends}>
                      <View
                        style={{
                          height: width * 0.45,
                          width: width * 0.6,
                          backgroundColor: "red",
                          marginLeft: 20,
                          borderRadius: 5,
                        }}
                      ></View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>

          <View style={[styles.activitySlides, { marginBottom: 10 }]}>
            <View style={{ marginBottom: 10 }}>
              <Text style={{ color: "white" }}>FAQs</Text>
            </View>
            <View>
              <FlatList
                data={PushUpData}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal
                bounces={false}
                decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
                renderToHardwareTextureAndroid
                contentContainerStyle={{ alignItems: "center" }}
                // snapToInterval={ITEM_SIZE}
                snapToAlignment="start"
                // onScroll={Animated.event(
                //   [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                //   {
                //     useNativeDriver: false,
                //   }
                // )}
                // onViewableItemsChanged={viewableItemsChanged}
                // ref={slidesRef}
                renderItem={({ item, index }) => {
                  let reqSentence = item.requirements;
                  return (
                    <TouchableOpacity onPress={Onclick_FAQS}>
                      <View
                        style={{
                          height: width * 0.3,
                          width: width * 0.4,
                          backgroundColor: "red",
                          marginLeft: 20,
                          borderRadius: 5,
                        }}
                      ></View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>

          <View style={[styles.activitySlides, { marginBottom: 20 }]}>
            <View style={{ marginBottom: 10 }}>
              <Text style={{ color: "white" }}>Promotion</Text>
            </View>
            <View>
              <FlatList
                data={PushUpData}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal
                bounces={false}
                decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
                renderToHardwareTextureAndroid
                contentContainerStyle={{ alignItems: "center" }}
                // snapToInterval={ITEM_SIZE}
                snapToAlignment="start"
                // onScroll={Animated.event(
                //   [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                //   {
                //     useNativeDriver: false,
                //   }
                // )}
                // onViewableItemsChanged={viewableItemsChanged}
                // ref={slidesRef}
                renderItem={({ item, index }) => {
                  let reqSentence = item.requirements;
                  return (
                    <TouchableOpacity onPress={Onclick_Promote}>
                      <View
                        style={{
                          height: width * 0.5,
                          width: width * 0.4,
                          backgroundColor: "red",
                          marginLeft: SPACING,
                          borderRadius: 5,
                        }}
                      ></View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
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
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT * 0.5,
    margin: SPACING,
  },
});
