import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function BackArrow() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.touchArea}
      onPress={() => navigation.goBack()}
    >
      <Icon name="arrow-left" style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchArea: {
    width: 40,
    height: 40,
    alignItems: "baseline",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  icon: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
