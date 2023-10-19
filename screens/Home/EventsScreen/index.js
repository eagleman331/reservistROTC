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
import { SPACING } from "../../../theme";
import BackComponent from "../../../component/BackComponent";
import { FlatList } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { PushUpData } from "../../../testFiles/DataSlides/PftSlidesFAQs/Push-UpFAQs";

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
<View style={{flexDirection:"row"}}>
<SharedElement
        id={`item.${item.id}.photo`}
        style={[ {flex:1}]}
      >
        <View style={[{ height: height*.4, width: width ,}]}>
          <Image
            source={{ uri: item.photo }}
            style={[StyleSheet.absoluteFillObject, { resizeMode: "cover" }]}
          />
             <BackComponent />
        </View>
      </SharedElement>
</View>
     
   
     
      <View
        style={{
          backgroundColor: "red",
          width,
          height: height * 0.6,     
        }}
      >
        <View>
          <View style={{ marginTop: 15, marginLeft: 15 }}>
            <Text style={{ color: "white" }}>Events</Text>
          </View>
          <Divider style={{ margin: 2 }} width={1} />

          <ScrollView style={{width, height:height*.5}}>
            <FlatList
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
            />
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
