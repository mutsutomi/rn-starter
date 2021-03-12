import React from "react";
import {View, Text, StyleSheet} from "react-native";

const BoxScreen=()=>{
  return(
    <View style={styles.viewStyle}>
      <View style={styles.boxOneStyle} />
      <View style={styles.boxTwoStyle} />
      <View style={styles.boxThreeStyle} />
    </View>
  );
};

const styles=StyleSheet.create({
  viewStyle:{
    borderWidth:3,
    borderColor:"black",
    alignItems: "flex-start",
    flexDirection:"row",
    justifyContent:"space-between",
    height:200
  },
  boxOneStyle:{
    backgroundColor:"red",
    height:50,
    width:80
  },
  boxTwoStyle:{
    backgroundColor:"green",
    height:50,
    width:80,
    alignSelf:"center"
  },
  boxThreeStyle:{
    backgroundColor:"purple",
    height:50,
    width:80,

  },
});

export default BoxScreen;