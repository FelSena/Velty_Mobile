import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

export default function Banner() {
  return (
    <View>
      <ImageBackground
        source={require("../../../../assets/banners/banner1.png")}
        resizeMode="cover"
        style={styles.container}
      >
        <TouchableOpacity style={styles.button} />
      </ImageBackground>
      <ImageBackground
        source={require("../../../../assets/banners/banner2.png")}
        resizeMode="stretch"
        style={styles.container}
      >
        <TouchableOpacity style={styles.button} />
      </ImageBackground>
      <ImageBackground
        source={require("../../../../assets/banners/banner3.png")}
        resizeMode="stretch"
        style={styles.container}
      >
        <TouchableOpacity style={styles.button} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 146,
    alignItems: "flex-end",
    backgroundColor: "blue",
    marginBottom: 5,
  },
  button: {
    width: 48,
    height: 48,
    marginVertical: 50,
    marginRight: 30,
  },
});
