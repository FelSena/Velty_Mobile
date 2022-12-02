import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import COLORS from "../../styles/Colors";
import Globals from "../../styles/Globals";

export default function Button({ name, onPress = () => {}, ...props }) {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.button}>
      <Text style={[Globals.text, { color: COLORS.white }]}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 311,
    height: 56,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.orange,
  },
});
