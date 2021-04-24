import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
// import { color } from "react-native-reanimated";

const HomeScreen = ({navigation}) => {
  return( 
    <View style={styles.buttons}>
      <Text style={styles.text}>This is home screen</Text>
      <Button
        onPress={()=>navigation.navigate('Components')}
        title="Go to Components Demo" 
      />
      <Button
        title='Go to List Demo'
        onPress={()=>navigation.navigate('List')}
      />
      <Button
        title='Go to Image Demo'
        onPress={()=>navigation.navigate('Image')}
      />
      <Button
        title="Go to Counter Demo"
        onPress={()=>navigation.navigate("Counter")}
      />
      <Button
        title="Go to Color Demo"
        onPress={()=>navigation.navigate("Color")}
      />
      <Button
        title="Go to Square Demo"
        onPress={()=>navigation.navigate("Square")}
      />
      <Button
        title="Go to Text Demo"
        onPress={()=>navigation.navigate("Text")}
      />
      <Button
        title="Go to Box Demo"
        onPress={()=>navigation.navigate("Box")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  buttons:{
    height:500,
    justifyContent:"space-between"
  },
});

export default HomeScreen;