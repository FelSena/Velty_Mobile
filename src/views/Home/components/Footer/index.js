import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../../../../styles/Colors";
import Globals from "../../../../styles/Globals";

export default function Footer() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Icon
        name="cart-outline"
        style={Globals.icon}
        onPress={() => navigation.navigate("Cart")}
      />
      <Icon
        name="gamepad-circle"
        style={[Globals.icon, { color: COLORS.purple }]}
        onPress={() => navigation.navigate("Home")}
      />
      <Icon name="bookmark-outline" style={Globals.icon} />
      <Icon
        name="account-outline"
        style={Globals.icon}
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    height: 116,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
