import React, { useContext, useLayoutEffect } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
BackHandler
  
} from "react-native";
import Colors from "../../constant/Colors";
const { width, height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons'; 
import { Icon } from "@rneui/themed";


const index = () => {

  const navigation = useNavigation();


  return (
    <View
    
    >
      <TouchableOpacity   style={styles.containerBackButton} >
        <Icon
          raised
          reverse
          name="chevron-thin-left"
          type="entypo"
          size={20}
          color={Colors.gray}
          onPress={() => navigation.goBack()}
        />
      </TouchableOpacity>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  containerBackButton: {
    marginTop: 30,
    paddingLeft:15,
    position:"absolute"
    
  },
  button:{
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
  }
});
