import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Globals from "../../../../styles/Globals";

export default function Sponsors() {
  const sponsorUrl = [
    "https://logodownload.org/wp-content/uploads/2020/12/portobello-logo-0.png",
    "https://logos-world.net/wp-content/uploads/2022/07/Hansgrohe-Logo.png",
    "https://logodownload.org/wp-content/uploads/2017/12/saint-gobain-logo.png",
    "https://logodownload.org/wp-content/uploads/2019/02/weber-saint-gobain-0.png",
    "https://logodownload.org/wp-content/uploads/2019/02/weber-saint-gobain-0.png",
    "https://logodownload.org/wp-content/uploads/2019/02/weber-saint-gobain-0.png",
  ];
  return (
    <ScrollView
      style={{ marginVertical: 20, paddingLeft: "2.5%" }}
      horizontal={true}
    >
      {sponsorUrl.map((item, index) => (
        <Image
          source={{ uri: item }}
          resizeMode="cover"
          style={styles.img}
          key={index}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 120,
    height: 25,
  },
});
