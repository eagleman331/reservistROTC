import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SharedElement } from "react-navigation-shared-element";
import { Ionicons } from "@expo/vector-icons";
import { Divider } from "@rneui/themed";
import { openBrowserAsync } from "expo-web-browser";
import { SPACING } from "../../../theme";
import BackComponent from "../../../component/BackComponent";
import { FlatList } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { PushUpData } from "../../../testFiles/DataSlides/PftSlidesFAQs/Push-UpFAQs";
import { Colors } from "../../../constant/Colors";
const { width, height } = Dimensions.get("window");

const index = ({ navigation, route }) => {
  const { item, cardData } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const GoToWebsite = () => {
    openBrowserAsync("https://www.facebook.com/profile.php?id=100089656629408");
  };
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View style={{ flexDirection: "row" }}>
        <View style={[{ height: height * 0.4, width: width }]}>
          <SharedElement
            id={`itemFAQs.${item.id}.photo`}
            style={[StyleSheet.absoluteFillObject, { resizeMode: "cover" }]}
          >
            <Image
              source={{ uri: item.photo }}
              style={[StyleSheet.absoluteFillObject, { resizeMode: "cover" }]}
            />
          </SharedElement>
          <BackComponent />
        </View>
      </View>

      <View
        style={{
          backgroundColor: "red",
          width,
          height: height * 0.6,
        }}
      >
               
        <View>
          <View style={{ marginTop: 10, marginLeft: 15, marginBottom: 5 }}>
          <SharedElement
                        id={`item.cardData`}
                        style={{ color: "white", fontFamily: "mrt-bold", fontSize: 20 }}
                        >

            <Text
              style={{ color: "white", fontFamily: "mrt-bold", fontSize: 20 }}
            >
              {cardData}
            </Text>
                        </SharedElement>
                          
          </View>
          {/* <Divider style={{ margin: 2 }} width={1} /> */}

          <ScrollView style={{ width, height: height * 0.5 }}>
            <View>
              <View style={styles.cardTitle}>
                <Text
                  style={{
                    color: "white",
                    fontFamily: "roboto-medium",
                    fontSize: 17,
                    marginLeft: SPACING,
                  }}
                >
                  Title
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontFamily: "source-sans3-medium",
                    fontSize: 14,
                    marginLeft: SPACING,
                    marginRight: SPACING,
                  }}
                >
                  {" "}
                  There is a tiny bus all over the world tonight all over the
                  world i can feel the sounds the lover and love if you kow{" "}
                </Text>
              </View>
              <TouchableOpacity onPress={GoToWebsite}>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: SPACING,
                    marginTop: SPACING * 0.2,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontFamily: "source-sans3-light",
                      fontSize: 14,
                    }}
                  >
                    Website:{" "}
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontFamily: "source-sans3-italic",
                      fontSize: 14,
                    }}
                  >
                    www.website yryrtyrt.com
                  </Text>
                </View>
              </TouchableOpacity>

              <Divider style={{ margin: 2 }} width={1} />
            </View>

            <View>
              <View style={styles.cardTitle}>
                <Text
                  style={{
                    color: "white",
                    fontFamily: "roboto-medium",
                    fontSize: 17,
                    marginLeft: SPACING,
                  }}
                >
                  Title
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontFamily: "source-sans3-medium",
                    fontSize: 14,
                    marginLeft: SPACING,
                    marginRight: SPACING,
                  }}
                >
                  {" "}
                  There is a tiny bus all over the world tonight all over the
                  world i can feel the sounds the lover and love if you kow{" "}
                </Text>
              </View>

              <Divider style={{ margin: 2 }} width={1} />
            </View>

            <View>
              <View style={styles.cardTitle}>
                <Text
                  style={{
                    color: "white",
                    fontFamily: "roboto-medium",
                    fontSize: 17,
                    marginLeft: SPACING,
                  }}
                >
                  TWO GIRLS IN THE SUN
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: SPACING * 0.2,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontFamily: "source-sans3-medium",
                      fontSize: 14,
                      marginLeft: SPACING,
                      marginRight: SPACING,

                      flex: 1,
                    }}
                  >
                    {"    "}
                    There is a tiny bus all over the world tonight all over the
                    world i can feel the sounds the lover and love if you kow{" "}
                  </Text>
                  <View style={{ width: 70, height: 70, flex: 1 }}>
                    <Image
                      source={{ uri: item.photo }}
                      style={[
                        StyleSheet.absoluteFillObject,
                        { resizeMode: "contain" },
                      ]}
                    />
                  </View>
                </View>
              </View>

              <Divider style={{ margin: 2 }} width={1} />
            </View>

            <View>
              <View style={styles.cardTitle}>
                <Text
                  style={{
                    color: "white",
                    fontFamily: "roboto-medium",
                    fontSize: 17,
                    marginLeft: SPACING,
                  }}
                >
                  TWO GIRLS IN THE SUN
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: SPACING * 0.2,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontFamily: "source-sans3-medium",
                      fontSize: 14,
                      marginLeft: SPACING,
                      marginRight: SPACING,

                      flex: 1,
                    }}
                  >
                    {"    "}
                    There is a tiny bus all over the world tonight all over the
                    world i can feel the sounds the lover and love if you kow{" "}
                  </Text>

                  <View style={{ width: 70, height: 70, flex: 1 }}>
                    <Image
                      source={{ uri: item.photo }}
                      style={[
                        StyleSheet.absoluteFillObject,
                        { resizeMode: "contain" },
                      ]}
                    />
                  </View>
                </View>
                <TouchableOpacity onPress={GoToWebsite}>
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: SPACING,
                      marginTop: SPACING * 0.2,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontFamily: "source-sans3-light",
                        fontSize: 14,
                      }}
                    >
                      Website:{" "}
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontFamily: "source-sans3-italic",
                        fontSize: 14,
                      }}
                    >
                      www.website yryrtyrt.com
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <Divider style={{ margin: 2 }} width={1} />
            </View>

            <View>
              <View style={styles.cardTitle}>
                <Text
                  style={{
                    color: "white",
                    fontFamily: "roboto-medium",
                    fontSize: 17,
                    marginLeft: SPACING,
                  }}
                >
                  Multiple tabs
                </Text>
                <View style={{ marginTop: SPACING }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginLeft: SPACING,
                      marginRight: SPACING,
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "white",
                        width: 10,
                        height: 10,
                        borderRadius: 4,
                        alignSelf: "flex-start",
                        marginTop: 5,
                      }}
                    />
                    <Text
                      style={{
                        color: "white",
                        fontFamily: "source-sans3-medium",
                        fontSize: 14,
                        marginLeft: SPACING,
                        marginRight: SPACING,
                      }}
                    >
                      {" "}
                      There is a tiny bus all over tonight all over to m yeah
                      posasa There is a tiny bus all over tonight all over to m
                      yeah posasa There is a tiny bus all over tonight all over
                      to m yeah posasa
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginLeft: SPACING,
                      marginRight: SPACING,
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "white",
                        width: 10,
                        height: 10,
                        borderRadius: 4,
                        alignSelf: "flex-start",
                        marginTop: 5,
                      }}
                    />
                    <Text
                      style={{
                        color: "white",
                        fontFamily: "source-sans3-medium",
                        fontSize: 14,
                        marginLeft: SPACING,
                        marginRight: SPACING,
                      }}
                    >
                      {" "}
                      There is a tiny bus all over
                    </Text>
                  </View>
                </View>
              </View>

              <Divider style={{ margin: 2 }} width={1} />
            </View>
            <View>
              <View style={styles.cardTitle}>
                <Text
                  style={{
                    color: "white",
                    fontFamily: "roboto-medium",
                    fontSize: 17,
                    marginLeft: SPACING,
                  }}
                >
                  Multiple tabs
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontFamily: "source-sans3-light",
                    fontSize: 12,
                    marginLeft: SPACING * 2,
                  }}
                >
                  (Additional REMARKS)
                </Text>
                <View style={{ marginTop: SPACING }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginLeft: SPACING,
                      marginRight: SPACING,
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "white",
                        width: 10,
                        height: 10,
                        borderRadius: 4,
                        alignSelf: "flex-start",
                        marginTop: 5,
                      }}
                    />
                    <Text
                      style={{
                        color: "white",
                        fontFamily: "source-sans3-medium",
                        fontSize: 14,
                        marginLeft: SPACING,
                        marginRight: SPACING,
                      }}
                    >
                      {" "}
                      There is a tiny bus all over tonight all over to m yeah
                      posasa There is a tiny bus all over tonight all over to m
                      yeah posasa There is a tiny bus all over tonight all over
                      to m yeah posasa
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginLeft: SPACING,
                      marginRight: SPACING,
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "white",
                        width: 10,
                        height: 10,
                        borderRadius: 4,
                        alignSelf: "flex-start",
                        marginTop: 5,
                      }}
                    />
                    <Text
                      style={{
                        color: "white",
                        fontFamily: "source-sans3-medium",
                        fontSize: 14,
                        marginLeft: SPACING,
                        marginRight: SPACING,
                      }}
                    >
                      {" "}
                      There is a tiny bus all over
                    </Text>
                  </View>
                </View>
              </View>

              <Divider style={{ margin: 2 }} width={1} />
            </View>

            {/* <FlatList
              data={PushUpData}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              bounces={false}
              decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
              renderToHardwareTextureAndroid
              renderItem={({ item, index }) => {
                return (
                  <View>
                    <View style={styles.cardTitle}>
                      <Text>{item.title}</Text>
                      <Text>Subtitle</Text>
                    </View>

                    <View style={styles.cardContent}>
                      <Text>Content</Text>
                      <Text>{item.content}</Text>
                    </View>
                  </View>
                );
              }}
            /> */}
          </ScrollView>
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
