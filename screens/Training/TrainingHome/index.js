import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar';

const { width, height } = Dimensions.get("window");

const index = ({navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
           <StatusBar style="auto" />
           <Image
        source={require("../../../assets/Drawer/PresidentMarcos.png")}
        style={styles.imageBack}
      />
      <View style={{marginTop:50, marginLeft:50}}>
      <Text style={{color:"white", fontSize:30}}>Training</Text>
      </View>
    
    </SafeAreaView>
  )
}

export default index

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
})