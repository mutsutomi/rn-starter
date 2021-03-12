import React from "react";
import {View, Text, StyleSheet} from "react-native";

const BoxScreen=()=>{
  return(
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles=StyleSheet.create({
  viewStyle:{
    borderWidth:3,
    borderColor:"black",
    alignItems: "flex-end",
    // flexDirection:"row",
    // justifyContent:"space-between",
    height:200
  },
  textOneStyle:{
    borderWidth:3,
    borderColor:"red",
    // flex:1
  },
  textTwoStyle:{
    borderWidth:3,
    borderColor:"red",
    // flex:1,
    // alignSelf:"center",
    fontSize:18,
    ...StyleSheet.absoluteFillObject
    //   =>  position:"absolute", top:0,right:0,bottom:0,left:0
  },
  textThreeStyle:{
    borderWidth:3,
    borderColor:"red",
    // flex:1
  },
});

export default BoxScreen;